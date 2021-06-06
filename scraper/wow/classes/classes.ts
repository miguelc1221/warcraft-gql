import * as cheerio from 'cheerio'
import got from 'got'
import {
  getClassLinks,
  getClassCrestSrc,
  getClassIntro,
  getClassInfo,
  getClassDetails,
  getClassSpecializations,
  getClassRaces,
  getClassFeatures,
} from './utils'
import { writeFile } from 'fs/promises'

const scrapeClasses = async () => {
  try {
    const response = await got(`https://worldofwarcraft.com/en-us/game/classes`)
    const queryAllClasses = cheerio.load(response.body)
    const links = getClassLinks(queryAllClasses)

    return await Promise.all(
      links.map(async ({ name, link }) => {
        const classResponse = await got(link)
        const queryClass = cheerio.load(classResponse.body)

        const crestSrc = getClassCrestSrc(queryClass)
        const intro = getClassIntro(queryClass)
        const info = getClassInfo(queryClass)
        const combatRoles = getClassDetails(queryClass, 'Combat Roles')
        const resources = getClassDetails(
          queryClass,
          name === 'Hunter' ? 'Resource Bars' : 'Resources'
        )
        const armorType = getClassDetails(queryClass, 'Armor Type')
        const weapons = getClassDetails(queryClass, 'Available Weapons')
        const specializations = getClassSpecializations(queryClass)
        const races = getClassRaces(queryClass)
        const features = getClassFeatures(queryClass)

        return {
          name,
          crestSrc,
          intro,
          info,
          combatRoles,
          resources,
          armorType,
          weapons,
          specializations,
          races,
          features,
        }
      })
    )
  } catch (error) {
    console.log(error, 'There was an error scraping class data.')
  }
}

export const saveClassesToJson = async (): Promise<void> => {
  try {
    console.log('Scraping class data...')
    await scrapeClasses()
    const classes = await scrapeClasses()
    await writeFile('./scraper/classes.json', JSON.stringify(classes, null, 2))
    console.log('Done...')
  } catch (error) {
    console.log(error, 'There was an error saving class json.')
  }
}
