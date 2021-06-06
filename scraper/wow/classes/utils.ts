import * as cheerio from 'cheerio'

export const getClassLinks = (
  cheerioSelector: cheerio.CheerioAPI
): { name: string; link: string }[] => {
  return cheerioSelector('.Card--borderPaper')
    .map((_idx, ele) => {
      const name = cheerioSelector(ele).find('.Card-title').text()
      const link = cheerioSelector(ele).find('.Card-link').attr('href')

      return { name, link: `https://worldofwarcraft.com${link}` }
    })
    .get()
}

export const getClassCrestSrc = (
  cheerioSelector: cheerio.CheerioAPI
): string | null => {
  const crestSrc = cheerioSelector('.Art--above .Art-image').css(
    'background-image'
  )

  if (!crestSrc) {
    return null
  }

  let imageUrl = crestSrc.slice(4, -1).replace(/"/g, '')

  if (!imageUrl.includes('https:')) {
    imageUrl = `https:${imageUrl}`
  }

  return imageUrl
}

export const getClassIntro = (
  cheerioSelector: cheerio.CheerioAPI
): { title: string; description: string } => {
  const title = cheerioSelector('.font-semp-medium-white').first().text()
  const description = cheerioSelector('.gutter-vertical p span').first().text()

  return { title, description }
}

export const getClassInfo = (cheerioSelector: cheerio.CheerioAPI): string => {
  return cheerioSelector('.gutter-vertical p span').eq(1).text()
}

export const getClassDetails = (
  cheerioSelector: cheerio.CheerioAPI,
  detail: string
): string[] => {
  const detailText = cheerioSelector(
    `.font-semp-small-darkBeige:contains('${detail}')`
  )
    .parent()
    .contents()
    .eq(1)
    .text()

  return detailText.split(', ')
}

export const getClassSpecializations = (
  cheerioSelector: cheerio.CheerioAPI
): { name: string; description: string }[] => {
  return cheerioSelector('.Talent')
    .map((_idx, ele) => {
      return {
        name: cheerioSelector(ele).find('.Talent-name').text(),
        description: cheerioSelector(ele).find('.Talent-desc').text(),
      }
    })
    .get()
}

export const getClassRaces = (
  cheerioSelector: cheerio.CheerioAPI
): string[] => {
  return cheerioSelector('.RaceTile-name')
    .map((_idx, ele) => cheerioSelector(ele).text())
    .get()
}

export const getClassFeatures = (
  cheerioSelector: cheerio.CheerioAPI
): { name: string; description: string }[] => {
  return cheerioSelector('.Media-text')
    .map((_idx, ele) => {
      return {
        name: cheerioSelector(ele).contents().eq(0).text(),
        description: cheerioSelector(ele).contents().eq(1).text(),
      }
    })
    .get()
}
