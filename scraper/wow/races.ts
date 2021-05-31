import * as cheerio from 'cheerio'
import got from 'got'
import RaceScraper from './utils'
import { writeFile } from 'fs/promises'

const scrapeRaces = async () => {
  try {
    const response = await got(`https://worldofwarcraft.com/en-us/game/races`)
    const queryAllRacesUrl = cheerio.load(response.body)
    const links = RaceScraper.getLinks(queryAllRacesUrl)

    const raceData = await Promise.all(
      links.map(async ({ link, ...race }) => {
        const response = await got(link)
        const queryRaceUrl = cheerio.load(response.body)
        const isAlliedType = race.type === 'Allied'
        const intro = isAlliedType
          ? RaceScraper.getAlliedIntro(queryRaceUrl)
          : RaceScraper.getIntro(queryRaceUrl)
        const crestSrc = isAlliedType
          ? RaceScraper.getAlliedCrestSrc(queryRaceUrl)
          : RaceScraper.getCrestSrc(queryRaceUrl)
        const history = isAlliedType
          ? null
          : RaceScraper.getHistory(queryRaceUrl)
        const zone = isAlliedType
          ? null
          : RaceScraper.getSection(queryRaceUrl, 'Home Zone')
        const city = isAlliedType
          ? null
          : RaceScraper.getSection(queryRaceUrl, 'Home City')
        const mount = isAlliedType
          ? RaceScraper.getAlliedMount(queryRaceUrl)
          : RaceScraper.getSection(queryRaceUrl, 'Racial Mount')
        const traits = isAlliedType
          ? RaceScraper.getAlliedTraits(queryRaceUrl)
          : RaceScraper.getTraits(queryRaceUrl)
        const classes = isAlliedType
          ? RaceScraper.getAlliedClasses(queryRaceUrl)
          : RaceScraper.getClasses(queryRaceUrl)

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
    console.log(error, 'There was an error saving to json file.')
  }
}
