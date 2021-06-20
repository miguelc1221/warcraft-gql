import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3'

const accessKeyId = process.env.AWS_ACCESS_ID || ''
const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY || ''

const s3Client = new S3Client({
  region: 'us-east-2',
  credentials: { accessKeyId, secretAccessKey },
})

export const uploadImage = async (
  image: Buffer,
  imageName: string
): Promise<void> => {
  try {
    const uploadParams = {
      Bucket: 'warcraft-gql',
      Body: image,
      Key: `${imageName}.png`,
      ContentType: 'image/png',
    }

    await s3Client.send(new PutObjectCommand(uploadParams))

    console.log('Successfully Uploaded Image')
  } catch (error) {
    console.log('Error - Uploading Image to S3', error)
  }
}
