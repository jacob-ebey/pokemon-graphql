/* DO NOT EDIT! */
import { GraphQLResolveInfo } from 'graphql'

export interface ITypeMap {
  Context: any

  QueryParent: any
  MultiLangParent: any
  PokemonParent: any
  PokemonTypeParent: any
  PokemonBaseStatsParent: any
  PokemonSkillParent: any
  ItemParent: any
}

export namespace QueryResolvers {
  export interface ArgsSearchPokemon<T extends ITypeMap> {
    query: string
    first: number | null
    skip: number | null
  }

  export type SearchPokemonResolver<T extends ITypeMap> = (
    parent: T['QueryParent'],
    args: ArgsSearchPokemon<T>,
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => T['PokemonParent'][] | Promise<T['PokemonParent'][]>

  export interface ArgsPokemon<T extends ITypeMap> {
    id: string | null
    pokedexNumber: number | null
  }

  export type PokemonResolver<T extends ITypeMap> = (
    parent: T['QueryParent'],
    args: ArgsPokemon<T>,
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => T['PokemonParent'] | null | Promise<T['PokemonParent'] | null>

  export interface ArgsSearchItems<T extends ITypeMap> {
    query: string
    first: number | null
    skip: number | null
  }

  export type SearchItemsResolver<T extends ITypeMap> = (
    parent: T['QueryParent'],
    args: ArgsSearchItems<T>,
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => T['ItemParent'][] | Promise<T['ItemParent'][]>

  export interface ArgsItem<T extends ITypeMap> {
    id: string | null
    pokedexNumber: number | null
  }

  export type ItemResolver<T extends ITypeMap> = (
    parent: T['QueryParent'],
    args: ArgsItem<T>,
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => T['ItemParent'] | null | Promise<T['ItemParent'] | null>

  export interface Type<T extends ITypeMap> {
    searchPokemon: (
      parent: T['QueryParent'],
      args: ArgsSearchPokemon<T>,
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => T['PokemonParent'][] | Promise<T['PokemonParent'][]>
    pokemon: (
      parent: T['QueryParent'],
      args: ArgsPokemon<T>,
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => T['PokemonParent'] | null | Promise<T['PokemonParent'] | null>
    searchItems: (
      parent: T['QueryParent'],
      args: ArgsSearchItems<T>,
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => T['ItemParent'][] | Promise<T['ItemParent'][]>
    item: (
      parent: T['QueryParent'],
      args: ArgsItem<T>,
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => T['ItemParent'] | null | Promise<T['ItemParent'] | null>
  }
}

export namespace MultiLangResolvers {
  export type EnglishResolver<T extends ITypeMap> = (
    parent: T['MultiLangParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => string | Promise<string>

  export type JapaneseResolver<T extends ITypeMap> = (
    parent: T['MultiLangParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => string | Promise<string>

  export type ChineseResolver<T extends ITypeMap> = (
    parent: T['MultiLangParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => string | Promise<string>

  export interface Type<T extends ITypeMap> {
    english: (
      parent: T['MultiLangParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => string | Promise<string>
    japanese: (
      parent: T['MultiLangParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => string | Promise<string>
    chinese: (
      parent: T['MultiLangParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => string | Promise<string>
  }
}

export namespace PokemonResolvers {
  export type IdResolver<T extends ITypeMap> = (
    parent: T['PokemonParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => string | Promise<string>

  export type PokedexNumberResolver<T extends ITypeMap> = (
    parent: T['PokemonParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => number | Promise<number>

  export type NameSearchResolver<T extends ITypeMap> = (
    parent: T['PokemonParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => string | Promise<string>

  export type NameResolver<T extends ITypeMap> = (
    parent: T['PokemonParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => T['MultiLangParent'] | Promise<T['MultiLangParent']>

  export type TypesResolver<T extends ITypeMap> = (
    parent: T['PokemonParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => T['PokemonTypeParent'][] | Promise<T['PokemonTypeParent'][]>

  export type BaseResolver<T extends ITypeMap> = (
    parent: T['PokemonParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => T['PokemonBaseStatsParent'] | Promise<T['PokemonBaseStatsParent']>

  export interface Type<T extends ITypeMap> {
    id: (
      parent: T['PokemonParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => string | Promise<string>
    pokedexNumber: (
      parent: T['PokemonParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => number | Promise<number>
    nameSearch: (
      parent: T['PokemonParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => string | Promise<string>
    name: (
      parent: T['PokemonParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => T['MultiLangParent'] | Promise<T['MultiLangParent']>
    types: (
      parent: T['PokemonParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => T['PokemonTypeParent'][] | Promise<T['PokemonTypeParent'][]>
    base: (
      parent: T['PokemonParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => T['PokemonBaseStatsParent'] | Promise<T['PokemonBaseStatsParent']>
  }
}

export namespace PokemonTypeResolvers {
  export type IdResolver<T extends ITypeMap> = (
    parent: T['PokemonTypeParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => string | Promise<string>

  export type EnglishResolver<T extends ITypeMap> = (
    parent: T['PokemonTypeParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => string | Promise<string>

  export type ChineseResolver<T extends ITypeMap> = (
    parent: T['PokemonTypeParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => string | Promise<string>

  export type JapaneseResolver<T extends ITypeMap> = (
    parent: T['PokemonTypeParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => string | Promise<string>

  export interface Type<T extends ITypeMap> {
    id: (
      parent: T['PokemonTypeParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => string | Promise<string>
    english: (
      parent: T['PokemonTypeParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => string | Promise<string>
    chinese: (
      parent: T['PokemonTypeParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => string | Promise<string>
    japanese: (
      parent: T['PokemonTypeParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => string | Promise<string>
  }
}

export namespace PokemonBaseStatsResolvers {
  export type HpResolver<T extends ITypeMap> = (
    parent: T['PokemonBaseStatsParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => number | Promise<number>

  export type AttackResolver<T extends ITypeMap> = (
    parent: T['PokemonBaseStatsParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => number | Promise<number>

  export type DefenseResolver<T extends ITypeMap> = (
    parent: T['PokemonBaseStatsParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => number | Promise<number>

  export type SpAttackResolver<T extends ITypeMap> = (
    parent: T['PokemonBaseStatsParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => number | Promise<number>

  export type SpDefenseResolver<T extends ITypeMap> = (
    parent: T['PokemonBaseStatsParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => number | Promise<number>

  export type SpeedResolver<T extends ITypeMap> = (
    parent: T['PokemonBaseStatsParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => number | Promise<number>

  export interface Type<T extends ITypeMap> {
    hp: (
      parent: T['PokemonBaseStatsParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => number | Promise<number>
    attack: (
      parent: T['PokemonBaseStatsParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => number | Promise<number>
    defense: (
      parent: T['PokemonBaseStatsParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => number | Promise<number>
    spAttack: (
      parent: T['PokemonBaseStatsParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => number | Promise<number>
    spDefense: (
      parent: T['PokemonBaseStatsParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => number | Promise<number>
    speed: (
      parent: T['PokemonBaseStatsParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => number | Promise<number>
  }
}

export namespace PokemonSkillResolvers {
  export type IdResolver<T extends ITypeMap> = (
    parent: T['PokemonSkillParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => string | Promise<string>

  export type PokedexNumberResolver<T extends ITypeMap> = (
    parent: T['PokemonSkillParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => number | Promise<number>

  export type NameResolver<T extends ITypeMap> = (
    parent: T['PokemonSkillParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => T['MultiLangParent'] | Promise<T['MultiLangParent']>

  export type AccuracyResolver<T extends ITypeMap> = (
    parent: T['PokemonSkillParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => number | Promise<number>

  export type PowerResolver<T extends ITypeMap> = (
    parent: T['PokemonSkillParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => number | Promise<number>

  export type PpResolver<T extends ITypeMap> = (
    parent: T['PokemonSkillParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => number | Promise<number>

  export type TypeResolver<T extends ITypeMap> = (
    parent: T['PokemonSkillParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => T['PokemonTypeParent'] | Promise<T['PokemonTypeParent']>

  export interface Type<T extends ITypeMap> {
    id: (
      parent: T['PokemonSkillParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => string | Promise<string>
    pokedexNumber: (
      parent: T['PokemonSkillParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => number | Promise<number>
    name: (
      parent: T['PokemonSkillParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => T['MultiLangParent'] | Promise<T['MultiLangParent']>
    accuracy: (
      parent: T['PokemonSkillParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => number | Promise<number>
    power: (
      parent: T['PokemonSkillParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => number | Promise<number>
    pp: (
      parent: T['PokemonSkillParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => number | Promise<number>
    type: (
      parent: T['PokemonSkillParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => T['PokemonTypeParent'] | Promise<T['PokemonTypeParent']>
  }
}

export namespace ItemResolvers {
  export type IdResolver<T extends ITypeMap> = (
    parent: T['ItemParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => string | Promise<string>

  export type PokedexNumberResolver<T extends ITypeMap> = (
    parent: T['ItemParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => number | Promise<number>

  export type NameSearchResolver<T extends ITypeMap> = (
    parent: T['ItemParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => string | Promise<string>

  export type NameResolver<T extends ITypeMap> = (
    parent: T['ItemParent'],
    args: {},
    ctx: T['Context'],
    info: GraphQLResolveInfo,
  ) => T['MultiLangParent'] | Promise<T['MultiLangParent']>

  export interface Type<T extends ITypeMap> {
    id: (
      parent: T['ItemParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => string | Promise<string>
    pokedexNumber: (
      parent: T['ItemParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => number | Promise<number>
    nameSearch: (
      parent: T['ItemParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => string | Promise<string>
    name: (
      parent: T['ItemParent'],
      args: {},
      ctx: T['Context'],
      info: GraphQLResolveInfo,
    ) => T['MultiLangParent'] | Promise<T['MultiLangParent']>
  }
}

export interface IResolvers<T extends ITypeMap> {
  Query: QueryResolvers.Type<T>
  MultiLang: MultiLangResolvers.Type<T>
  Pokemon: PokemonResolvers.Type<T>
  PokemonType: PokemonTypeResolvers.Type<T>
  PokemonBaseStats: PokemonBaseStatsResolvers.Type<T>
  PokemonSkill: PokemonSkillResolvers.Type<T>
  Item: ItemResolvers.Type<T>
}
