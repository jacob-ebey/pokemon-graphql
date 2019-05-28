import { Context } from './types/Context';

export const Query = {
  searchPokemon: (_: any, { query, first, skip, types }: SearchArgs, ctx: Context) => {
    const where = query && {
      nameSearch_starts_with: query,
      OR: [
        {
          nameSearch_contains: query
        }
      ]
    };

    return ctx.db.pokemons({
      first,
      skip,
      where: {
        ...where,
        AND: types && types.map(type => ({
          types_some: {
            english: type
          }
        }))
      }
    });
  },

  pokemon: (_: any, { id, pokedexNumber }: PokemonArgs, ctx: Context) => {
    if (id) {
      return ctx.db.pokemon({ id });
    }

    if (pokedexNumber) {
      return ctx.db.pokemon({ pokedexNumber });
    }

    throw new Error('An id or pokedex number nust be provided.');
  },

  searchItems: (_: any, { query, first, skip }: SearchArgs, ctx: Context) => {
    return ctx.db.items({
      first,
      skip,
      where: {
        nameSearch_starts_with: query,
        OR: [
          {
            nameSearch_contains: query
          }
        ]
      }
    });
  },

  item: (_: any, { id, pokedexNumber }: PokemonArgs, ctx: Context) => {
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
