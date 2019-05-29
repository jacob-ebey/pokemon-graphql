import { Context } from './types/Context';

export const Query = {
  async searchPokemon(_: any, { query, first, skip, types }: SearchArgs, ctx: Context) {
    const where = {
      OR: query ? [
        {
          nameSearch_starts_with: query
        },
        {
          nameSearch_contains: query
        }
      ] : undefined,
      AND: types ? types.map(type => ({
        types_some: {
          english: type
        }
      })) : undefined
    };

    const [total, results] = await Promise.all([
      ctx.db.pokemonsConnection({ where }).aggregate().count(),
      ctx.db.pokemons({
        first,
        skip,
        where
      })
    ]);

    return {
      total,
      results
    }
  },

  pokemon(_: any, { id, pokedexNumber }: PokemonArgs, ctx: Context) {
    if (id) {
      return ctx.db.pokemon({ id });
    }

    if (pokedexNumber) {
      return ctx.db.pokemon({ pokedexNumber });
    }

    throw new Error('An id or pokedex number nust be provided.');
  },

  searchItems(_: any, { query, first, skip }: SearchArgs, ctx: Context) {
    return ctx.db.items({
      first,
      skip,
      where: {
        OR: [
          {
            nameSearch_starts_with: query
          },
          {
            nameSearch_contains: query
          }
        ]
      }
    });
  },

  item(_: any, { id, pokedexNumber }: PokemonArgs, ctx: Context) {
    if (id) {
      return ctx.db.item({ id });
    }

    if (pokedexNumber) {
      return ctx.db.item({ pokedexNumber });
    }

    throw new Error('An id or pokedex number nust be provided.');
  },
}

export interface SearchArgs {
  query: string;
  first?: number;
  skip?: number;
  types?: string[];
}

export interface PokemonArgs {
  id?: string;
  pokedexNumber?: number;
}

export interface ItemArgs {
  id?: string;
  pokedexNumber?: number;
}
