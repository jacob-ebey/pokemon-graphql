import { Pokemon as Parent } from '../generated/prisma';
import { Context } from './types/Context';

export const Pokemon = {
  name: ({ id, name }: Parent, _: any, { db }: Context) => name || db.pokemon({ id }).name(),
  base: ({ id, base }: Parent, _: any, { db }: Context) => base || db.pokemon({ id }).base(),
  types: ({ id, base }: Parent, _: any, { db }: Context) => base || db.pokemon({ id }).types()
}
