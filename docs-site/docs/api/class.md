# Class

All classes in World of Warraft

## Schema

```graphql
type Class {
  armorType: [String!]
  combatRoles: [String!]
  crestSrc: String
  features: [Feature!]
  id: Int
  info: String
  introDescription: String
  introTitle: String
  name: String
  races: [Race!]
  resources: [String!]
  specializations: [Specialization!]
  weapons: [String!]
}
```

## Get All Classes

#### Sample Query

```graphql
query {
  classes {
    id
    name
    crestSrc
    introTitle
    introDescription
    info
    combatRoles
    resources
    armorType
    weapons
    specializations {
      name
    }
    features {
      name
    }
    races {
      name
    }
  }
}
```

#### Sample Query Response

```graphql
{
  "data": {
    "classes": [
      {
        "id": 1,
        "name": "Warrior",
        "crestSrc": "https://warcraft-gql.s3.us-east-2.amazonaws.com/warrior-class-crest.png",
        "introTitle": "Lords of War",
        "introDescription": "For as long as war has raged, heroes from every race have aimed to master the art of battle. Warriors combine strength, leadership, and a vast knowledge of arms and armor to wreak havoc in glorious combat. Some protect from the front lines with shields, locking down enemies while allies support the warrior from behind with spell and bow. Others forgo the shield and unleash their rage at the closest threat with a variety of deadly weapons.",
        "info": "Warriors equip themselves carefully for combat and engage their enemies head-on, letting attacks glance off their heavy armor. They use diverse combat tactics and a wide variety of weapon types to protect their more vulnerable allies. Warriors must carefully master their rage – the power behind their strongest attacks – in order to maximize their effectiveness in combat.",
        "combatRoles": [
          "Tank",
          "Damage"
        ],
        "resources": [
          "Health",
          "Rage"
        ],
        "armorType": [
          "Plate",
          "Shields"
        ],
        "weapons": [
          "Daggers",
          "Fist Weapons",
          "Axes",
          "Maces",
          "Swords",
          "Polearms",
          "Staves"
        ],
        "specializations": [
          {
            "name": "Arms"
          },
          {
            "name": "Fury"
          },
          {
            "name": "Protection"
          }
        ],
        "features": [
          {
            "name": "Tank"
          },
          {
            "name": "Melee Damage"
          },
          {
            "name": "Rage"
          }
        ],
        "races": [
          {
            "name": "Human"
          },
          {
            "name": "Dwarf"
          },
          {
            "name": "Night Elf"
          },
          {
            "name": "Gnome"
          },
          {
            "name": "Draenei"
          },
          {
            "name": "Worgen"
          },
          {
            "name": "Pandaren"
          },
          {
            "name": "Orc"
          },
          {
            "name": "Undead"
          },
          {
            "name": "Tauren"
          },
          {
            "name": "Troll"
          },
          {
            "name": "Blood Elf"
          },
          {
            "name": "Goblin"
          },
          {
            "name": "Void Elf"
          },
          {
            "name": "Lightforged Draenei"
          },
          {
            "name": "Dark Iron Dwarf"
          },
          {
            "name": "Kul Tiran"
          },
          {
            "name": "Mechagnome"
          },
          {
            "name": "Nightborne"
          },
          {
            "name": "Highmountain Tauren"
          },
          {
            "name": "Mag'har Orc"
          },
          {
            "name": "Zandalari Troll"
          },
          {
            "name": "Vulpera"
          }
        ]
      },
      {
        "id": 2,
        "name": "Paladin",
        ....
      }
    ]
  }
}
```

## Get A Single Class

#### Sample Query

```graphql
query {
  classById(id: 1) {
    id
    name
    crestSrc
    introTitle
    introDescription
    info
    combatRoles
    resources
    armorType
    weapons
    specializations {
      name
    }
    features {
      name
    }
    races {
      name
    }
  }
}
```

#### Sample Query Response

```graphql
{
  "data": {
    "classById": {
      "id": 1,
      "name": "Warrior",
      "crestSrc": "https://warcraft-gql.s3.us-east-2.amazonaws.com/warrior-class-crest.png",
      "introTitle": "Lords of War",
      "introDescription": "For as long as war has raged, heroes from every race have aimed to master the art of battle. Warriors combine strength, leadership, and a vast knowledge of arms and armor to wreak havoc in glorious combat. Some protect from the front lines with shields, locking down enemies while allies support the warrior from behind with spell and bow. Others forgo the shield and unleash their rage at the closest threat with a variety of deadly weapons.",
      "info": "Warriors equip themselves carefully for combat and engage their enemies head-on, letting attacks glance off their heavy armor. They use diverse combat tactics and a wide variety of weapon types to protect their more vulnerable allies. Warriors must carefully master their rage – the power behind their strongest attacks – in order to maximize their effectiveness in combat.",
      "combatRoles": [
        "Tank",
        "Damage"
      ],
      "resources": [
        "Health",
        "Rage"
      ],
      "armorType": [
        "Plate",
        "Shields"
      ],
      "weapons": [
        "Daggers",
        "Fist Weapons",
        "Axes",
        "Maces",
        "Swords",
        "Polearms",
        "Staves"
      ],
      "specializations": [
        {
          "name": "Arms"
        },
        {
          "name": "Fury"
        },
        {
          "name": "Protection"
        }
      ],
      "features": [
        {
          "name": "Tank"
        },
        {
          "name": "Melee Damage"
        },
        {
          "name": "Rage"
        }
      ],
      "races": [
        {
          "name": "Human"
        },
        {
          "name": "Dwarf"
        },
        {
          "name": "Night Elf"
        },
        {
          "name": "Gnome"
        },
        {
          "name": "Tauren"
        },
        {
          "name": "Draenei"
        },
        {
          "name": "Worgen"
        },
        {
          "name": "Pandaren"
        },
        {
          "name": "Orc"
        },
        {
          "name": "Undead"
        },
        {
          "name": "Troll"
        },
        {
          "name": "Blood Elf"
        },
        {
          "name": "Goblin"
        },
        {
          "name": "Void Elf"
        },
        {
          "name": "Lightforged Draenei"
        },
        {
          "name": "Dark Iron Dwarf"
        },
        {
          "name": "Kul Tiran"
        },
        {
          "name": "Mechagnome"
        },
        {
          "name": "Nightborne"
        },
        {
          "name": "Highmountain Tauren"
        },
        {
          "name": "Mag'har Orc"
        },
        {
          "name": "Zandalari Troll"
        },
        {
          "name": "Vulpera"
        }
      ]
    }
```
