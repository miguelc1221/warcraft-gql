import { PrismaClient } from '@prisma/client'
import raceData from '../scraper/races.json'
import classData from '../scraper/classes.json'

const prisma = new PrismaClient()

const classMap = new Map(classData.map((i) => [i.name, i]))

const seed = async (): Promise<void> => {
  for (const race of raceData) {
    await prisma.race.create({
      data: {
        faction: race.faction,
        name: race.name,
        type: race.type,
        crestSrc: race.crestSrc,
        introTitle: race.intro.title,
        introDescription: race.intro.description,
        historyTitle: race.history?.title,
        historyDescription: race.history?.description,
        zoneName: race.zone?.name,
        zoneDescription: race.zone?.description,
        cityName: race.city?.name,
        cityDescription: race.city?.description,
        mountName: race.mount.name,
        mountDescription: race.mount.description,
        traits: {
          create: race.traits,
        },
        classes: {
          connectOrCreate: race.classes.map((className) => {
            const currentClass = classMap.get(className)!

            return {
              where: { name: currentClass.name },
              create: {
                name: currentClass.name,
                crestSrc: currentClass.crestSrc,
                introTitle: currentClass.intro.title,
                introDescription: currentClass.intro.description,
                info: currentClass.info,
                combatRoles: currentClass.combatRoles,
                resources: currentClass.resources,
                armorType: currentClass.armorType,
                weapons: currentClass.weapons,
                specializations: {
                  create: currentClass.specializations,
                },
                features: {
                  create: currentClass.features,
                },
              },
            }
          }),
        },
      },
    })
  }
}

seed()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
