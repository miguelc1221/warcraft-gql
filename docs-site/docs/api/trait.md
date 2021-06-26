# Trait

All specializations in World of Warraft

## Schema

```graphql
type Trait {
  description: String
  id: Int
  name: String
  race: Race
}
```

## Get All Traits

#### Sample Query

```graphql
query {
  traits {
    id
    name
    description
    race {
      name
    }
  }
}
```

#### Sample Query Response

```graphql
{
  "data": {
    "traits": [
      {
        "id": 1,
        "name": "Will to Survive",
        "description": "Humans can shake off debilitating stun effects.",
        "race": {
          "name": "Human"
        }
      },
      {
        "id": 2,
        "name": "Diplomacy",
        "description": "The straightforward and outspoken humans tend to get along well with other races and gain their trust with relative ease.",
        "race": {
          "name": "Human"
        }
      },
      {
        "id": 3,
        "name": "The Human Spirit",
        "description": "Humans are very adaptable, and get additional bonuses to all secondary stats from all sources.",
        "race": {
          "name": "Human"
        }
      },
      {
        "id": 4,
        "name": "Explorer",
        "description": "Dwarves receive a skill bonus to archaeology and are able to survey faster than other races.",
        "race": {
          "name": "Dwarf"
        }
      },
      {
        "id": 5,
        "name": "Frost Resistance",
        "description": "Ironforge dwarves have a natural resistance to Frost magic.",
        "race": {
          "name": "Dwarf"
        }
      },
    ...
    ]
  }
}
```
