import got from 'got'
import raceData from './races.json'
import classData from './classes.json'
import { uploadImage } from './s3'

const raceImages = raceData.map(async (race) => {
  try {
    const response = got(race.crestSrc)
    const image = await response.buffer()

    await uploadImage(
      image,
      `${race.name.split(' ').join('-').toLowerCase()}-race-crest`
    )
  } catch (error) {
    console.log(error)
  }
})

const classImages = classData.map(async (currentClass) => {
  try {
    const response = got(currentClass.crestSrc)
    const image = await response.buffer()

    await uploadImage(
      image,
      `${currentClass.name.split(' ').join('-').toLowerCase()}-class-crest`
    )
  } catch (error) {
    console.log(error)
  }
})

const upLoadImagesToS3 = async () => {
  try {
    await Promise.all([...raceImages, ...classImages])
  } catch (error) {
    console.log('Failed to upload images', error)
  }
}

upLoadImagesToS3()
