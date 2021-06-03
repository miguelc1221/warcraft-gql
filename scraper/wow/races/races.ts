import * as cheerio from 'cheerio'
import got from 'got'
import RaceScraper from './utils'
import { writeFile } from 'fs/promises'

const scrapeRaces = async () => {
  try {
    const response = await got(`https://worldofwarcraft.com/en-us/game/races`)
    const queryAllRaces = cheerio.load(response.body)
    const links = RaceScraper.getLinks(queryAllRaces)

    const raceData = await Promise.all(
      links.map(async ({ link, ...race }) => {
        const response = await got(link)
        const queryRace = cheerio.load(response.body)
        const isAlliedType = race.type === 'Allied'
        const intro = isAlliedType
          ? RaceScraper.getAlliedIntro(queryRace)
          : RaceScraper.getIntro(queryRace)
        const crestSrc = isAlliedType
          ? RaceScraper.getAlliedCrestSrc(queryRace)
          : RaceScraper.getCrestSrc(queryRace)
        const history = isAlliedType ? null : RaceScraper.getHistory(queryRace)
        const zone = isAlliedType
          ? null
          : RaceScraper.getSection(queryRace, 'Home Zone')
        const city = isAlliedType
          ? null
          : RaceScraper.getSection(queryRace, 'Home City')
        const mount = isAlliedType
          ? RaceScraper.getAlliedMount(queryRace)
          : RaceScraper.getSection(queryRace, 'Racial Mount')
        const traits = isAlliedType
          ? RaceScraper.getAlliedTraits(queryRace)
          : RaceScraper.getTraits(queryRace)
        const classes = isAlliedType
          ? RaceScraper.getAlliedClasses(queryRace)
          : RaceScraper.getClasses(queryRace)

        return {
          ...race,
          intro,
          crestSrc,
          history,
          zone,
          city,
          mount,
          traits,
          classes,
        }
      })
    )

    return [...new Map(raceData.map((race) => [race['name'], race])).values()]
  } catch (error) {
    console.log(error, 'There was an error scraping race data.')
  }
}

export const saveRacesToJson = async (): Promise<void> => {
  try {
    console.log('Scraping race data...')
    const races = await scrapeRaces()
    await writeFile('./scraper/races.json', JSON.stringify(races, null, 2))
    console.log('Done...')
  } catch (error) {
    console.log(error, 'There was an error saving race json.')
  }
}
