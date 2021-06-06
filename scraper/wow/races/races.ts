import * as cheerio from 'cheerio'
import got from 'got'
import { writeFile } from 'fs/promises'
import {
  getLinks,
  getAlliedIntro,
  getIntro,
  getAlliedCrestSrc,
  getCrestSrc,
  getHistory,
  getSection,
  getAlliedMount,
  getAlliedTraits,
  getAlliedClasses,
  getTraits,
  getClasses,
} from './utils'

const scrapeRaces = async () => {
  try {
    const response = await got(`https://worldofwarcraft.com/en-us/game/races`)
    const queryAllRaces = cheerio.load(response.body)
    const links = getLinks(queryAllRaces)

    const raceData = await Promise.all(
      links.map(async ({ link, ...race }) => {
        const response = await got(link)
        const queryRace = cheerio.load(response.body)
        const isAlliedType = race.type === 'Allied'
        const intro = isAlliedType
          ? getAlliedIntro(queryRace)
          : getIntro(queryRace)
        const crestSrc = isAlliedType
          ? getAlliedCrestSrc(queryRace)
          : getCrestSrc(queryRace)
        const history = isAlliedType ? null : getHistory(queryRace)
        const zone = isAlliedType ? null : getSection(queryRace, 'Home Zone')
        const city = isAlliedType ? null : getSection(queryRace, 'Home City')
        const mount = isAlliedType
          ? getAlliedMount(queryRace)
          : getSection(queryRace, 'Racial Mount')
        const traits = isAlliedType
          ? getAlliedTraits(queryRace)
          : getTraits(queryRace)
        const classes = isAlliedType
          ? getAlliedClasses(queryRace)
          : getClasses(queryRace)

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
