# Specialization

All specializations in World of Warraft

## Schema

```graphql
type Specialization {
  class: Class
  description: String
  id: Int
  name: String
}
```

## Get All Specializations

#### Sample Query

```graphql
query {
  specializations {
    id
    name
    description
    class {
      name
    }
  }
}
```

#### Sample Query Response

```graphql
{
  "data": {
    "specializations": [
      {
        "id": 1,
        "name": "Arms",
        "description": "A battle-hardened master of weapons, using mobility and overpowering attacks to strike her opponents down.\n\nPreferred Weapon: Two-Handed Axe, Mace, Sword",
        "class": {
          "name": "Warrior"
        }
      },
      {
        "id": 2,
        "name": "Fury",
        "description": "A furious berserker unleashing a flurry of attacks to carve her opponents to pieces.\n\nPreferred Weapons: Dual Axes, Maces, Swords",
        "class": {
          "name": "Warrior"
        }
      },
      {
        "id": 3,
        "name": "Protection",
        "description": "A stalwart protector who uses a shield to safeguard herself and her allies.\n\nPreferred Weapon: Axe, Mace, Sword, and Shield",
        "class": {
          "name": "Warrior"
        }
      },
      {
        "id": 4,
        "name": "Holy",
        "description": "Invokes the power of the Light to heal and protect allies and vanquish evil from the darkest corners of the world.\n\nPreferred Weapon: Sword, Mace, and Shield",
        "class": {
          "name": "Paladin"
        }
      },
    ...
    ]
  }
}
```
