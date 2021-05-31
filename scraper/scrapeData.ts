import { saveRacesToJson } from './wow/races'

const scrapeData = async () => {
  try {
    await saveRacesToJson()
  } catch (error) {
    console.log(error, 'Failed to scrapeData')
  }
}

scrapeData()
