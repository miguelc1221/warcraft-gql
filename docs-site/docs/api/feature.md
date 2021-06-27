# Feature

All specializations in World of Warraft

## Schema

```graphql
type Feature {
  class: Class
  description: String
  id: Int
  name: String
}
```

## Get All Features

#### Sample Query

```graphql
query {
  features {
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
    "features": [
      {
        "id": 1,
        "name": "Tank",
        "description": "Mighty warriors depend on their heavy armor, shields, and battle prowess to defend themselves and ensure enemies don’t focus on their softer-skinned allies.",
        "class": {
          "name": "Warrior"
        }
      },
      {
        "id": 2,
        "name": "Melee Damage",
        "description": "Weapon mastery is a staple of warrior training, and they are capable of delivering high damage with enormous two-handed weapons or by wielding two weapons.",
        "class": {
          "name": "Warrior"
        }
      },
      {
        "id": 3,
        "name": "Rage",
        "description": "As warriors deal or take damage, their rage grows, allowing them to deliver truly crushing attacks in the heat of battle.",
        "class": {
          "name": "Warrior"
        }
      },
      {
        "id": 4,
        "name": "Tank",
        "description": "Stalwart paladins are trained to use the heaviest armor and shields, and can utilize their skill to ensure that enemies focus on them, defending weaker members of their group.",
        "class": {
          "name": "Paladin"
        }
      },
      {
        "id": 5,
        "name": "Healing",
        "description": "Paladins’ potent healing abilities can ensure that they and their allies remain in fighting shape.",
        "class": {
          "name": "Paladin"
        }
      },
    ...
    ]
  }
}
```

## Get A Single Feature

#### Sample Query

```graphql
query {
  featureById(id: 1) {
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
    "featureById": {
      "id": 1,
      "name": "Tank",
      "description": "Mighty warriors depend on their heavy armor, shields, and battle prowess to defend themselves and ensure enemies don’t focus on their softer-skinned allies.",
      "class": {
        "name": "Warrior"
      }
    }
  }
}
```
