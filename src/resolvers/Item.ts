import { Item as Parent } from '../generated/prisma';
import { Context } from './types/Context';

export const Item = {
  name: ({ id, name }: Parent, _: any, { db }: Context) => name || db.item({ id }).name()
}
