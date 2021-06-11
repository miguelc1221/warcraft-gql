import { db } from './db'
import { PrismaClient } from '@prisma/client'

export interface Context {
  db: PrismaClient
}

export const context: Context = {
  db,
}
