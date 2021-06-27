<div align="center" >
  <img src="./assets/wow-logo.png"  width="700">
</div>

# Warcraft-GQL

A GraphQL API for World of Warcraft

https://warcraft-gql.com

Query Endpoint - https://warcraft-gql.com/graphql

## Getting Started

### Steps

1. clone repo
2. A PostgreSQL DB
3. create `.env` file and define `DATABASE_URL`
4. `npm install`
5. `npm run migrate:dev` to run shcema migrations with [Prisma Migrate](https://www.prisma.io/migrate)
6. `npm run seed` to seed DB
7. `npm run dev` to start dev server and run the API
