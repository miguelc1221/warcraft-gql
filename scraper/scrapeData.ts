import { saveRacesToJson } from './wow/races/races'
import { saveClassesToJson } from './wow/classes/classes'

const scrapeData = async () => {
  try {
    await Promise.all([saveRacesToJson(), saveClassesToJson()])
  } catch (error) {
    console.log(error, 'Failed to scrape all data')
  }
}

scrapeData()
