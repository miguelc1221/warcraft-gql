import * as cheerio from 'cheerio'

export const getLinks = (
  cheerioSelector: cheerio.CheerioAPI
): { faction: string; name: string; link: string; type: string }[] => {
  return cheerioSelector('.Pane-content .List-item')
    .map(function () {
      let faction = cheerioSelector(this).find('.RaceTile--horde').length
        ? 'Horde'
        : 'Alliance'
      const name = cheerioSelector(this).find('.RaceTile-name').text()
      const link = cheerioSelector(this).find('.RaceTile-link').attr('href')
      const type = cheerioSelector(this)
        .parents('.flex')
        .siblings('.align-center')
        .children('h2')
        .text()

      if (name === 'Pandaren') {
        faction = 'Both'
      }

      return {
        faction,
        name,
        link: `https://worldofwarcraft.com${link}`,
        type: type === 'Allied Races' ? 'Allied' : 'Core',
      }
    })
    .get()
}

export const getIntro = (
  cheerioSelector: cheerio.CheerioAPI
): { title: string; body: string } | null => {
  const introSelector = cheerioSelector('.gutter-medium').children()[1]
  const title = cheerioSelector(introSelector).find('h2').text()
  const body = cheerioSelector(introSelector).find('p').text()

  if (!title) {
    return null
  }

  return { title, body }
}

export const getCrestSrc = (
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

export const getHistory = (
  cheerioSelector: cheerio.CheerioAPI
): { title: string; body: string } | null => {
  const historySelector = cheerioSelector(`h2:contains('History')`).first()
  const title = historySelector.text()
  const body = cheerioSelector(`h2:contains('History')`)
    .first()
    .siblings()
    .map((_idx, ele) => cheerioSelector(ele).text())
    .get()
    .join('\n')

  if (!title) {
    return null
  }

  return { title, body }
}

export const getSection = (
  cheerioSelector: cheerio.CheerioAPI,
  section: string
): { name: string; description: string } | null => {
  const sectionSelector = cheerioSelector(`h2:contains('${section}')`).first()

  const name = sectionSelector.siblings('h3').text()
  const description = sectionSelector
    .siblings('h3')
    .nextAll()
    .map((_idx, ele) => cheerioSelector(ele).text())
    .get()
    .join('\n')

  if (!name) {
    return null
  }

  return { name, description }
}

export const getTraits = (
  cheerioSelector: cheerio.CheerioAPI
): { name: string; description: string }[] => {
  return cheerioSelector(`.font-semp-xSmall-blue`)
    .map((_idx, ele) => {
      const name = cheerioSelector(ele).text()
      const description = cheerioSelector(ele).parent().text()

      return { name, description }
    })
    .get()
}

export const getClasses = (cheerioSelector: cheerio.CheerioAPI): string[] => {
  return cheerioSelector(`.font-semp-xSmall-red`)
    .map((_idx, ele) => cheerioSelector(ele).text())
    .get()
}

export const getAlliedIntro = (
  cheerioSelector: cheerio.CheerioAPI
): { title: string; body: string } | null => {
  const title = 'Introduction'
  const body = cheerioSelector(`.font-bliz-light-small-beige`).first().text()

  if (!body) {
    return null
  }

  return { title, body }
}

export const getAlliedCrestSrc = (
  cheerioSelector: cheerio.CheerioAPI
): string | null => {
  let crestSrc = cheerioSelector('.Image-image').first().attr('src')

  if (!crestSrc) {
    return null
  }

  if (!crestSrc.includes('https:')) {
    crestSrc = `https:${crestSrc}`
  }

  return crestSrc
}

export const getAlliedMount = (
  cheerioSelector: cheerio.CheerioAPI
): { name: string; description: string } | null => {
  const name = cheerioSelector('h3.font-semp-medium-white')
    .eq(1)
    .text()
    .slice(14)

  const description = cheerioSelector('p.font-bliz-light-xSmall-beige')
    .eq(1)
    .text()

  if (!name) {
    return null
  }

  return { name, description }
}

export const getAlliedClasses = (
  cheerioSelector: cheerio.CheerioAPI
): string[] => {
  return cheerioSelector('.Grid--center')
    .eq(0)
    .children()
    .map((_idx, ele) =>
      cheerioSelector(ele).find('.font-bliz-light-small-lightGold').text()
    )
    .get()
}

export const getAlliedTraits = (
  cheerioSelector: cheerio.CheerioAPI
): { name: string; description: string }[] => {
  return cheerioSelector('.Grid--center')
    .eq(1)
    .children()
    .map((_idx, ele) => {
      const name = cheerioSelector(ele).find('.Talent-name').text()
      const description = cheerioSelector(ele).find('.Talent-desc').text()
      return { name, description }
    })
    .get()
}

export default {
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
}
