<div align="center" >
  <img src="./docs-site/static/img/warcraft-logo.png"  width="700">
</div>

# Warcraft-GQL

A GraphQL API for World of Warcraft.

**[Warcraft-GQL](https://warcraft-gql.com)** is a graphql API for World of Warcraft and inspired by **[narutoql](https://narutoql.com/)**. You can use this API to get data that was not available in the official Blizzard API, such as Class and Race info as seen **[here](https://worldofwarcraft.com/en-us/game/races/human)**. This project started as a way to tinker with some new libraries and framework, so feel free to contribute and add to the schema.

Query Endpoint - `https://warcraft-gql.com/graphql`

## Getting Started

### Steps

1. clone repo
2. A PostgreSQL DB
3. create `.env` file and define `DATABASE_URL`
4. `npm install`
5. `npm run migrate:dev` to run shcema migrations with [Prisma Migrate](https://www.prisma.io/migrate)
6. `npm run seed` to seed DB
7. `npm run dev` to start dev server and run the API or `npm run docs:dev` for documentation app.
