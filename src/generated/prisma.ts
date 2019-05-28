import { GraphQLResolveInfo, GraphQLSchema } from 'graphql'
import { IResolvers } from 'graphql-tools/dist/Interfaces'
import { Options } from 'graphql-binding'
import { makePrismaBindingClass, BasePrismaOptions } from 'prisma-binding'

export interface Query {
    pokemons: <T = Array<Pokemon | null>>(args: { where?: PokemonWhereInput | null, orderBy?: PokemonOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    pokemonSkills: <T = Array<PokemonSkill | null>>(args: { where?: PokemonSkillWhereInput | null, orderBy?: PokemonSkillOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    items: <T = Array<Item | null>>(args: { where?: ItemWhereInput | null, orderBy?: ItemOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    pokemonBaseStatses: <T = Array<PokemonBaseStats | null>>(args: { where?: PokemonBaseStatsWhereInput | null, orderBy?: PokemonBaseStatsOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    pokemonTypes: <T = Array<PokemonType | null>>(args: { where?: PokemonTypeWhereInput | null, orderBy?: PokemonTypeOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    multiLangs: <T = Array<MultiLang | null>>(args: { where?: MultiLangWhereInput | null, orderBy?: MultiLangOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    pokemon: <T = Pokemon | null>(args: { where: PokemonWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    pokemonSkill: <T = PokemonSkill | null>(args: { where: PokemonSkillWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    item: <T = Item | null>(args: { where: ItemWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    pokemonType: <T = PokemonType | null>(args: { where: PokemonTypeWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    pokemonsConnection: <T = PokemonConnection>(args: { where?: PokemonWhereInput | null, orderBy?: PokemonOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    pokemonSkillsConnection: <T = PokemonSkillConnection>(args: { where?: PokemonSkillWhereInput | null, orderBy?: PokemonSkillOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    itemsConnection: <T = ItemConnection>(args: { where?: ItemWhereInput | null, orderBy?: ItemOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    pokemonBaseStatsesConnection: <T = PokemonBaseStatsConnection>(args: { where?: PokemonBaseStatsWhereInput | null, orderBy?: PokemonBaseStatsOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    pokemonTypesConnection: <T = PokemonTypeConnection>(args: { where?: PokemonTypeWhereInput | null, orderBy?: PokemonTypeOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    multiLangsConnection: <T = MultiLangConnection>(args: { where?: MultiLangWhereInput | null, orderBy?: MultiLangOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    node: <T = Node | null>(args: { id: ID_Output }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> 
  }

export interface Mutation {
    createPokemon: <T = Pokemon>(args: { data: PokemonCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createPokemonSkill: <T = PokemonSkill>(args: { data: PokemonSkillCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createItem: <T = Item>(args: { data: ItemCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createPokemonBaseStats: <T = PokemonBaseStats>(args: { data: PokemonBaseStatsCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createPokemonType: <T = PokemonType>(args: { data: PokemonTypeCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createMultiLang: <T = MultiLang>(args: { data: MultiLangCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updatePokemon: <T = Pokemon | null>(args: { data: PokemonUpdateInput, where: PokemonWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updatePokemonSkill: <T = PokemonSkill | null>(args: { data: PokemonSkillUpdateInput, where: PokemonSkillWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateItem: <T = Item | null>(args: { data: ItemUpdateInput, where: ItemWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updatePokemonType: <T = PokemonType | null>(args: { data: PokemonTypeUpdateInput, where: PokemonTypeWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deletePokemon: <T = Pokemon | null>(args: { where: PokemonWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deletePokemonSkill: <T = PokemonSkill | null>(args: { where: PokemonSkillWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteItem: <T = Item | null>(args: { where: ItemWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deletePokemonType: <T = PokemonType | null>(args: { where: PokemonTypeWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    upsertPokemon: <T = Pokemon>(args: { where: PokemonWhereUniqueInput, create: PokemonCreateInput, update: PokemonUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertPokemonSkill: <T = PokemonSkill>(args: { where: PokemonSkillWhereUniqueInput, create: PokemonSkillCreateInput, update: PokemonSkillUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertItem: <T = Item>(args: { where: ItemWhereUniqueInput, create: ItemCreateInput, update: ItemUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertPokemonType: <T = PokemonType>(args: { where: PokemonTypeWhereUniqueInput, create: PokemonTypeCreateInput, update: PokemonTypeUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyPokemons: <T = BatchPayload>(args: { data: PokemonUpdateInput, where?: PokemonWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyPokemonSkills: <T = BatchPayload>(args: { data: PokemonSkillUpdateInput, where?: PokemonSkillWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyItems: <T = BatchPayload>(args: { data: ItemUpdateInput, where?: ItemWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyPokemonBaseStatses: <T = BatchPayload>(args: { data: PokemonBaseStatsUpdateInput, where?: PokemonBaseStatsWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyPokemonTypes: <T = BatchPayload>(args: { data: PokemonTypeUpdateInput, where?: PokemonTypeWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyMultiLangs: <T = BatchPayload>(args: { data: MultiLangUpdateInput, where?: MultiLangWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyPokemons: <T = BatchPayload>(args: { where?: PokemonWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyPokemonSkills: <T = BatchPayload>(args: { where?: PokemonSkillWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyItems: <T = BatchPayload>(args: { where?: ItemWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyPokemonBaseStatses: <T = BatchPayload>(args: { where?: PokemonBaseStatsWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyPokemonTypes: <T = BatchPayload>(args: { where?: PokemonTypeWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyMultiLangs: <T = BatchPayload>(args: { where?: MultiLangWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
  }

export interface Subscription {
    pokemon: <T = PokemonSubscriptionPayload | null>(args: { where?: PokemonSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    pokemonSkill: <T = PokemonSkillSubscriptionPayload | null>(args: { where?: PokemonSkillSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    item: <T = ItemSubscriptionPayload | null>(args: { where?: ItemSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    pokemonBaseStats: <T = PokemonBaseStatsSubscriptionPayload | null>(args: { where?: PokemonBaseStatsSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    pokemonType: <T = PokemonTypeSubscriptionPayload | null>(args: { where?: PokemonTypeSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    multiLang: <T = MultiLangSubscriptionPayload | null>(args: { where?: MultiLangSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> 
  }

export interface Exists {
  Pokemon: (where?: PokemonWhereInput) => Promise<boolean>
  PokemonSkill: (where?: PokemonSkillWhereInput) => Promise<boolean>
  Item: (where?: ItemWhereInput) => Promise<boolean>
  PokemonBaseStats: (where?: PokemonBaseStatsWhereInput) => Promise<boolean>
  PokemonType: (where?: PokemonTypeWhereInput) => Promise<boolean>
  MultiLang: (where?: MultiLangWhereInput) => Promise<boolean>
}

export interface Prisma {
  query: Query
  mutation: Mutation
  subscription: Subscription
  exists: Exists
  request: <T = any>(query: string, variables?: {[key: string]: any}) => Promise<T>
  delegate(operation: 'query' | 'mutation', fieldName: string, args: {
    [key: string]: any;
}, infoOrQuery?: GraphQLResolveInfo | string, options?: Options): Promise<any>;
delegateSubscription(fieldName: string, args?: {
    [key: string]: any;
}, infoOrQuery?: GraphQLResolveInfo | string, options?: Options): Promise<AsyncIterator<any>>;
getAbstractResolvers(filterSchema?: GraphQLSchema | string): IResolvers;
}

export interface BindingConstructor<T> {
  new(options: BasePrismaOptions): T
}
/**
 * Type Defs
*/

const typeDefs = `type AggregateItem {
  count: Int!
}

type AggregateMultiLang {
  count: Int!
}

type AggregatePokemon {
  count: Int!
}

type AggregatePokemonBaseStats {
  count: Int!
}

type AggregatePokemonSkill {
  count: Int!
}

type AggregatePokemonType {
  count: Int!
}

type BatchPayload {
  """The number of nodes that have been affected by the Batch operation."""
  count: Long!
}

type Item implements Node {
  id: ID!
  pokedexNumber: Int!
  nameSearch: String!
  name(where: MultiLangWhereInput): MultiLang!
}

"""A connection to a list of items."""
type ItemConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [ItemEdge]!
  aggregate: AggregateItem!
}

input ItemCreateInput {
  pokedexNumber: Int!
  nameSearch: String!
  name: MultiLangCreateOneInput!
}

"""An edge in a connection."""
type ItemEdge {
  """The item at the end of the edge."""
  node: Item!

  """A cursor for use in pagination."""
  cursor: String!
}

enum ItemOrderByInput {
  id_ASC
  id_DESC
  pokedexNumber_ASC
  pokedexNumber_DESC
  nameSearch_ASC
  nameSearch_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type ItemPreviousValues {
  id: ID!
  pokedexNumber: Int!
  nameSearch: String!
}

type ItemSubscriptionPayload {
  mutation: MutationType!
  node: Item
  updatedFields: [String!]
  previousValues: ItemPreviousValues
}

input ItemSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [ItemSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [ItemSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [ItemSubscriptionWhereInput!]

  """The subscription event gets dispatched when it's listed in mutation_in"""
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: ItemWhereInput
}

input ItemUpdateInput {
  pokedexNumber: Int
  nameSearch: String
  name: MultiLangUpdateOneRequiredInput
}

input ItemWhereInput {
  """Logical AND on all given filters."""
  AND: [ItemWhereInput!]

  """Logical OR on all given filters."""
  OR: [ItemWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [ItemWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  pokedexNumber: Int

  """All values that are not equal to given value."""
  pokedexNumber_not: Int

  """All values that are contained in given list."""
  pokedexNumber_in: [Int!]

  """All values that are not contained in given list."""
  pokedexNumber_not_in: [Int!]

  """All values less than the given value."""
  pokedexNumber_lt: Int

  """All values less than or equal the given value."""
  pokedexNumber_lte: Int

  """All values greater than the given value."""
  pokedexNumber_gt: Int

  """All values greater than or equal the given value."""
  pokedexNumber_gte: Int
  nameSearch: String

  """All values that are not equal to given value."""
  nameSearch_not: String

  """All values that are contained in given list."""
  nameSearch_in: [String!]

  """All values that are not contained in given list."""
  nameSearch_not_in: [String!]

  """All values less than the given value."""
  nameSearch_lt: String

  """All values less than or equal the given value."""
  nameSearch_lte: String

  """All values greater than the given value."""
  nameSearch_gt: String

  """All values greater than or equal the given value."""
  nameSearch_gte: String

  """All values containing the given string."""
  nameSearch_contains: String

  """All values not containing the given string."""
  nameSearch_not_contains: String

  """All values starting with the given string."""
  nameSearch_starts_with: String

  """All values not starting with the given string."""
  nameSearch_not_starts_with: String

  """All values ending with the given string."""
  nameSearch_ends_with: String

  """All values not ending with the given string."""
  nameSearch_not_ends_with: String
  name: MultiLangWhereInput
}

input ItemWhereUniqueInput {
  id: ID
  pokedexNumber: Int
}

"""
The \`Long\` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
"""
scalar Long

type MultiLang {
  english: String!
  japanese: String!
  chinese: String!
}

"""A connection to a list of items."""
type MultiLangConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [MultiLangEdge]!
  aggregate: AggregateMultiLang!
}

input MultiLangCreateInput {
  english: String!
  japanese: String!
  chinese: String!
}

input MultiLangCreateOneInput {
  create: MultiLangCreateInput
}

"""An edge in a connection."""
type MultiLangEdge {
  """The item at the end of the edge."""
  node: MultiLang!

  """A cursor for use in pagination."""
  cursor: String!
}

enum MultiLangOrderByInput {
  english_ASC
  english_DESC
  japanese_ASC
  japanese_DESC
  chinese_ASC
  chinese_DESC
  id_ASC
  id_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type MultiLangPreviousValues {
  english: String!
  japanese: String!
  chinese: String!
}

type MultiLangSubscriptionPayload {
  mutation: MutationType!
  node: MultiLang
  updatedFields: [String!]
  previousValues: MultiLangPreviousValues
}

input MultiLangSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [MultiLangSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [MultiLangSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [MultiLangSubscriptionWhereInput!]

  """The subscription event gets dispatched when it's listed in mutation_in"""
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: MultiLangWhereInput
}

input MultiLangUpdateDataInput {
  english: String
  japanese: String
  chinese: String
}

input MultiLangUpdateInput {
  english: String
  japanese: String
  chinese: String
}

input MultiLangUpdateOneRequiredInput {
  create: MultiLangCreateInput
  update: MultiLangUpdateDataInput
  upsert: MultiLangUpsertNestedInput
}

input MultiLangUpsertNestedInput {
  update: MultiLangUpdateDataInput!
  create: MultiLangCreateInput!
}

input MultiLangWhereInput {
  """Logical AND on all given filters."""
  AND: [MultiLangWhereInput!]

  """Logical OR on all given filters."""
  OR: [MultiLangWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [MultiLangWhereInput!]
  english: String

  """All values that are not equal to given value."""
  english_not: String

  """All values that are contained in given list."""
  english_in: [String!]

  """All values that are not contained in given list."""
  english_not_in: [String!]

  """All values less than the given value."""
  english_lt: String

  """All values less than or equal the given value."""
  english_lte: String

  """All values greater than the given value."""
  english_gt: String

  """All values greater than or equal the given value."""
  english_gte: String

  """All values containing the given string."""
  english_contains: String

  """All values not containing the given string."""
  english_not_contains: String

  """All values starting with the given string."""
  english_starts_with: String

  """All values not starting with the given string."""
  english_not_starts_with: String

  """All values ending with the given string."""
  english_ends_with: String

  """All values not ending with the given string."""
  english_not_ends_with: String
  japanese: String

  """All values that are not equal to given value."""
  japanese_not: String

  """All values that are contained in given list."""
  japanese_in: [String!]

  """All values that are not contained in given list."""
  japanese_not_in: [String!]

  """All values less than the given value."""
  japanese_lt: String

  """All values less than or equal the given value."""
  japanese_lte: String

  """All values greater than the given value."""
  japanese_gt: String

  """All values greater than or equal the given value."""
  japanese_gte: String

  """All values containing the given string."""
  japanese_contains: String

  """All values not containing the given string."""
  japanese_not_contains: String

  """All values starting with the given string."""
  japanese_starts_with: String

  """All values not starting with the given string."""
  japanese_not_starts_with: String

  """All values ending with the given string."""
  japanese_ends_with: String

  """All values not ending with the given string."""
  japanese_not_ends_with: String
  chinese: String

  """All values that are not equal to given value."""
  chinese_not: String

  """All values that are contained in given list."""
  chinese_in: [String!]

  """All values that are not contained in given list."""
  chinese_not_in: [String!]

  """All values less than the given value."""
  chinese_lt: String

  """All values less than or equal the given value."""
  chinese_lte: String

  """All values greater than the given value."""
  chinese_gt: String

  """All values greater than or equal the given value."""
  chinese_gte: String

  """All values containing the given string."""
  chinese_contains: String

  """All values not containing the given string."""
  chinese_not_contains: String

  """All values starting with the given string."""
  chinese_starts_with: String

  """All values not starting with the given string."""
  chinese_not_starts_with: String

  """All values ending with the given string."""
  chinese_ends_with: String

  """All values not ending with the given string."""
  chinese_not_ends_with: String
}

type Mutation {
  createPokemon(data: PokemonCreateInput!): Pokemon!
  createPokemonSkill(data: PokemonSkillCreateInput!): PokemonSkill!
  createItem(data: ItemCreateInput!): Item!
  createPokemonBaseStats(data: PokemonBaseStatsCreateInput!): PokemonBaseStats!
  createPokemonType(data: PokemonTypeCreateInput!): PokemonType!
  createMultiLang(data: MultiLangCreateInput!): MultiLang!
  updatePokemon(data: PokemonUpdateInput!, where: PokemonWhereUniqueInput!): Pokemon
  updatePokemonSkill(data: PokemonSkillUpdateInput!, where: PokemonSkillWhereUniqueInput!): PokemonSkill
  updateItem(data: ItemUpdateInput!, where: ItemWhereUniqueInput!): Item
  updatePokemonType(data: PokemonTypeUpdateInput!, where: PokemonTypeWhereUniqueInput!): PokemonType
  deletePokemon(where: PokemonWhereUniqueInput!): Pokemon
  deletePokemonSkill(where: PokemonSkillWhereUniqueInput!): PokemonSkill
  deleteItem(where: ItemWhereUniqueInput!): Item
  deletePokemonType(where: PokemonTypeWhereUniqueInput!): PokemonType
  upsertPokemon(where: PokemonWhereUniqueInput!, create: PokemonCreateInput!, update: PokemonUpdateInput!): Pokemon!
  upsertPokemonSkill(where: PokemonSkillWhereUniqueInput!, create: PokemonSkillCreateInput!, update: PokemonSkillUpdateInput!): PokemonSkill!
  upsertItem(where: ItemWhereUniqueInput!, create: ItemCreateInput!, update: ItemUpdateInput!): Item!
  upsertPokemonType(where: PokemonTypeWhereUniqueInput!, create: PokemonTypeCreateInput!, update: PokemonTypeUpdateInput!): PokemonType!
  updateManyPokemons(data: PokemonUpdateInput!, where: PokemonWhereInput): BatchPayload!
  updateManyPokemonSkills(data: PokemonSkillUpdateInput!, where: PokemonSkillWhereInput): BatchPayload!
  updateManyItems(data: ItemUpdateInput!, where: ItemWhereInput): BatchPayload!
  updateManyPokemonBaseStatses(data: PokemonBaseStatsUpdateInput!, where: PokemonBaseStatsWhereInput): BatchPayload!
  updateManyPokemonTypes(data: PokemonTypeUpdateInput!, where: PokemonTypeWhereInput): BatchPayload!
  updateManyMultiLangs(data: MultiLangUpdateInput!, where: MultiLangWhereInput): BatchPayload!
  deleteManyPokemons(where: PokemonWhereInput): BatchPayload!
  deleteManyPokemonSkills(where: PokemonSkillWhereInput): BatchPayload!
  deleteManyItems(where: ItemWhereInput): BatchPayload!
  deleteManyPokemonBaseStatses(where: PokemonBaseStatsWhereInput): BatchPayload!
  deleteManyPokemonTypes(where: PokemonTypeWhereInput): BatchPayload!
  deleteManyMultiLangs(where: MultiLangWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

"""An object with an ID"""
interface Node {
  """The id of the object."""
  id: ID!
}

"""Information about pagination in a connection."""
type PageInfo {
  """When paginating forwards, are there more items?"""
  hasNextPage: Boolean!

  """When paginating backwards, are there more items?"""
  hasPreviousPage: Boolean!

  """When paginating backwards, the cursor to continue."""
  startCursor: String

  """When paginating forwards, the cursor to continue."""
  endCursor: String
}

type Pokemon implements Node {
  id: ID!
  pokedexNumber: Int!
  nameSearch: String!
  name(where: MultiLangWhereInput): MultiLang!
  types(where: PokemonTypeWhereInput, orderBy: PokemonTypeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [PokemonType!]
  base(where: PokemonBaseStatsWhereInput): PokemonBaseStats!
}

type PokemonBaseStats {
  hp: Float!
  attack: Float!
  defense: Float!
  spAttack: Float!
  spDefense: Float!
  speed: Float!
}

"""A connection to a list of items."""
type PokemonBaseStatsConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [PokemonBaseStatsEdge]!
  aggregate: AggregatePokemonBaseStats!
}

input PokemonBaseStatsCreateInput {
  hp: Float!
  attack: Float!
  defense: Float!
  spAttack: Float!
  spDefense: Float!
  speed: Float!
}

input PokemonBaseStatsCreateOneInput {
  create: PokemonBaseStatsCreateInput
}

"""An edge in a connection."""
type PokemonBaseStatsEdge {
  """The item at the end of the edge."""
  node: PokemonBaseStats!

  """A cursor for use in pagination."""
  cursor: String!
}

enum PokemonBaseStatsOrderByInput {
  hp_ASC
  hp_DESC
  attack_ASC
  attack_DESC
  defense_ASC
  defense_DESC
  spAttack_ASC
  spAttack_DESC
  spDefense_ASC
  spDefense_DESC
  speed_ASC
  speed_DESC
  id_ASC
  id_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type PokemonBaseStatsPreviousValues {
  hp: Float!
  attack: Float!
  defense: Float!
  spAttack: Float!
  spDefense: Float!
  speed: Float!
}

type PokemonBaseStatsSubscriptionPayload {
  mutation: MutationType!
  node: PokemonBaseStats
  updatedFields: [String!]
  previousValues: PokemonBaseStatsPreviousValues
}

input PokemonBaseStatsSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [PokemonBaseStatsSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [PokemonBaseStatsSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [PokemonBaseStatsSubscriptionWhereInput!]

  """The subscription event gets dispatched when it's listed in mutation_in"""
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: PokemonBaseStatsWhereInput
}

input PokemonBaseStatsUpdateDataInput {
  hp: Float
  attack: Float
  defense: Float
  spAttack: Float
  spDefense: Float
  speed: Float
}

input PokemonBaseStatsUpdateInput {
  hp: Float
  attack: Float
  defense: Float
  spAttack: Float
  spDefense: Float
  speed: Float
}

input PokemonBaseStatsUpdateOneRequiredInput {
  create: PokemonBaseStatsCreateInput
  update: PokemonBaseStatsUpdateDataInput
  upsert: PokemonBaseStatsUpsertNestedInput
}

input PokemonBaseStatsUpsertNestedInput {
  update: PokemonBaseStatsUpdateDataInput!
  create: PokemonBaseStatsCreateInput!
}

input PokemonBaseStatsWhereInput {
  """Logical AND on all given filters."""
  AND: [PokemonBaseStatsWhereInput!]

  """Logical OR on all given filters."""
  OR: [PokemonBaseStatsWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [PokemonBaseStatsWhereInput!]
  hp: Float

  """All values that are not equal to given value."""
  hp_not: Float

  """All values that are contained in given list."""
  hp_in: [Float!]

  """All values that are not contained in given list."""
  hp_not_in: [Float!]

  """All values less than the given value."""
  hp_lt: Float

  """All values less than or equal the given value."""
  hp_lte: Float

  """All values greater than the given value."""
  hp_gt: Float

  """All values greater than or equal the given value."""
  hp_gte: Float
  attack: Float

  """All values that are not equal to given value."""
  attack_not: Float

  """All values that are contained in given list."""
  attack_in: [Float!]

  """All values that are not contained in given list."""
  attack_not_in: [Float!]

  """All values less than the given value."""
  attack_lt: Float

  """All values less than or equal the given value."""
  attack_lte: Float

  """All values greater than the given value."""
  attack_gt: Float

  """All values greater than or equal the given value."""
  attack_gte: Float
  defense: Float

  """All values that are not equal to given value."""
  defense_not: Float

  """All values that are contained in given list."""
  defense_in: [Float!]

  """All values that are not contained in given list."""
  defense_not_in: [Float!]

  """All values less than the given value."""
  defense_lt: Float

  """All values less than or equal the given value."""
  defense_lte: Float

  """All values greater than the given value."""
  defense_gt: Float

  """All values greater than or equal the given value."""
  defense_gte: Float
  spAttack: Float

  """All values that are not equal to given value."""
  spAttack_not: Float

  """All values that are contained in given list."""
  spAttack_in: [Float!]

  """All values that are not contained in given list."""
  spAttack_not_in: [Float!]

  """All values less than the given value."""
  spAttack_lt: Float

  """All values less than or equal the given value."""
  spAttack_lte: Float

  """All values greater than the given value."""
  spAttack_gt: Float

  """All values greater than or equal the given value."""
  spAttack_gte: Float
  spDefense: Float

  """All values that are not equal to given value."""
  spDefense_not: Float

  """All values that are contained in given list."""
  spDefense_in: [Float!]

  """All values that are not contained in given list."""
  spDefense_not_in: [Float!]

  """All values less than the given value."""
  spDefense_lt: Float

  """All values less than or equal the given value."""
  spDefense_lte: Float

  """All values greater than the given value."""
  spDefense_gt: Float

  """All values greater than or equal the given value."""
  spDefense_gte: Float
  speed: Float

  """All values that are not equal to given value."""
  speed_not: Float

  """All values that are contained in given list."""
  speed_in: [Float!]

  """All values that are not contained in given list."""
  speed_not_in: [Float!]

  """All values less than the given value."""
  speed_lt: Float

  """All values less than or equal the given value."""
  speed_lte: Float

  """All values greater than the given value."""
  speed_gt: Float

  """All values greater than or equal the given value."""
  speed_gte: Float
}

"""A connection to a list of items."""
type PokemonConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [PokemonEdge]!
  aggregate: AggregatePokemon!
}

input PokemonCreateInput {
  pokedexNumber: Int!
  nameSearch: String!
  name: MultiLangCreateOneInput!
  types: PokemonTypeCreateManyInput
  base: PokemonBaseStatsCreateOneInput!
}

"""An edge in a connection."""
type PokemonEdge {
  """The item at the end of the edge."""
  node: Pokemon!

  """A cursor for use in pagination."""
  cursor: String!
}

enum PokemonOrderByInput {
  id_ASC
  id_DESC
  pokedexNumber_ASC
  pokedexNumber_DESC
  nameSearch_ASC
  nameSearch_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type PokemonPreviousValues {
  id: ID!
  pokedexNumber: Int!
  nameSearch: String!
}

type PokemonSkill implements Node {
  id: ID!
  pokedexNumber: Int!
  name(where: MultiLangWhereInput): MultiLang!
  accuracy: Int!
  power: Int!
  pp: Int!
  type(where: PokemonTypeWhereInput): PokemonType!
}

"""A connection to a list of items."""
type PokemonSkillConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [PokemonSkillEdge]!
  aggregate: AggregatePokemonSkill!
}

input PokemonSkillCreateInput {
  pokedexNumber: Int!
  accuracy: Int!
  power: Int!
  pp: Int!
  name: MultiLangCreateOneInput!
  type: PokemonTypeCreateOneInput!
}

"""An edge in a connection."""
type PokemonSkillEdge {
  """The item at the end of the edge."""
  node: PokemonSkill!

  """A cursor for use in pagination."""
  cursor: String!
}

enum PokemonSkillOrderByInput {
  id_ASC
  id_DESC
  pokedexNumber_ASC
  pokedexNumber_DESC
  accuracy_ASC
  accuracy_DESC
  power_ASC
  power_DESC
  pp_ASC
  pp_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type PokemonSkillPreviousValues {
  id: ID!
  pokedexNumber: Int!
  accuracy: Int!
  power: Int!
  pp: Int!
}

type PokemonSkillSubscriptionPayload {
  mutation: MutationType!
  node: PokemonSkill
  updatedFields: [String!]
  previousValues: PokemonSkillPreviousValues
}

input PokemonSkillSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [PokemonSkillSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [PokemonSkillSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [PokemonSkillSubscriptionWhereInput!]

  """The subscription event gets dispatched when it's listed in mutation_in"""
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: PokemonSkillWhereInput
}

input PokemonSkillUpdateInput {
  pokedexNumber: Int
  accuracy: Int
  power: Int
  pp: Int
  name: MultiLangUpdateOneRequiredInput
  type: PokemonTypeUpdateOneRequiredInput
}

input PokemonSkillWhereInput {
  """Logical AND on all given filters."""
  AND: [PokemonSkillWhereInput!]

  """Logical OR on all given filters."""
  OR: [PokemonSkillWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [PokemonSkillWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  pokedexNumber: Int

  """All values that are not equal to given value."""
  pokedexNumber_not: Int

  """All values that are contained in given list."""
  pokedexNumber_in: [Int!]

  """All values that are not contained in given list."""
  pokedexNumber_not_in: [Int!]

  """All values less than the given value."""
  pokedexNumber_lt: Int

  """All values less than or equal the given value."""
  pokedexNumber_lte: Int

  """All values greater than the given value."""
  pokedexNumber_gt: Int

  """All values greater than or equal the given value."""
  pokedexNumber_gte: Int
  accuracy: Int

  """All values that are not equal to given value."""
  accuracy_not: Int

  """All values that are contained in given list."""
  accuracy_in: [Int!]

  """All values that are not contained in given list."""
  accuracy_not_in: [Int!]

  """All values less than the given value."""
  accuracy_lt: Int

  """All values less than or equal the given value."""
  accuracy_lte: Int

  """All values greater than the given value."""
  accuracy_gt: Int

  """All values greater than or equal the given value."""
  accuracy_gte: Int
  power: Int

  """All values that are not equal to given value."""
  power_not: Int

  """All values that are contained in given list."""
  power_in: [Int!]

  """All values that are not contained in given list."""
  power_not_in: [Int!]

  """All values less than the given value."""
  power_lt: Int

  """All values less than or equal the given value."""
  power_lte: Int

  """All values greater than the given value."""
  power_gt: Int

  """All values greater than or equal the given value."""
  power_gte: Int
  pp: Int

  """All values that are not equal to given value."""
  pp_not: Int

  """All values that are contained in given list."""
  pp_in: [Int!]

  """All values that are not contained in given list."""
  pp_not_in: [Int!]

  """All values less than the given value."""
  pp_lt: Int

  """All values less than or equal the given value."""
  pp_lte: Int

  """All values greater than the given value."""
  pp_gt: Int

  """All values greater than or equal the given value."""
  pp_gte: Int
  name: MultiLangWhereInput
  type: PokemonTypeWhereInput
}

input PokemonSkillWhereUniqueInput {
  id: ID
  pokedexNumber: Int
}

type PokemonSubscriptionPayload {
  mutation: MutationType!
  node: Pokemon
  updatedFields: [String!]
  previousValues: PokemonPreviousValues
}

input PokemonSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [PokemonSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [PokemonSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [PokemonSubscriptionWhereInput!]

  """The subscription event gets dispatched when it's listed in mutation_in"""
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: PokemonWhereInput
}

type PokemonType implements Node {
  id: ID!
  english: String!
  chinese: String!
  japanese: String!
}

"""A connection to a list of items."""
type PokemonTypeConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [PokemonTypeEdge]!
  aggregate: AggregatePokemonType!
}

input PokemonTypeCreateInput {
  english: String!
  chinese: String!
  japanese: String!
}

input PokemonTypeCreateManyInput {
  create: [PokemonTypeCreateInput!]
  connect: [PokemonTypeWhereUniqueInput!]
}

input PokemonTypeCreateOneInput {
  create: PokemonTypeCreateInput
  connect: PokemonTypeWhereUniqueInput
}

"""An edge in a connection."""
type PokemonTypeEdge {
  """The item at the end of the edge."""
  node: PokemonType!

  """A cursor for use in pagination."""
  cursor: String!
}

enum PokemonTypeOrderByInput {
  id_ASC
  id_DESC
  english_ASC
  english_DESC
  chinese_ASC
  chinese_DESC
  japanese_ASC
  japanese_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type PokemonTypePreviousValues {
  id: ID!
  english: String!
  chinese: String!
  japanese: String!
}

type PokemonTypeSubscriptionPayload {
  mutation: MutationType!
  node: PokemonType
  updatedFields: [String!]
  previousValues: PokemonTypePreviousValues
}

input PokemonTypeSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [PokemonTypeSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [PokemonTypeSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [PokemonTypeSubscriptionWhereInput!]

  """The subscription event gets dispatched when it's listed in mutation_in"""
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: PokemonTypeWhereInput
}

input PokemonTypeUpdateDataInput {
  english: String
  chinese: String
  japanese: String
}

input PokemonTypeUpdateInput {
  english: String
  chinese: String
  japanese: String
}

input PokemonTypeUpdateManyInput {
  create: [PokemonTypeCreateInput!]
  connect: [PokemonTypeWhereUniqueInput!]
  disconnect: [PokemonTypeWhereUniqueInput!]
  delete: [PokemonTypeWhereUniqueInput!]
  update: [PokemonTypeUpdateWithWhereUniqueNestedInput!]
  upsert: [PokemonTypeUpsertWithWhereUniqueNestedInput!]
}

input PokemonTypeUpdateOneRequiredInput {
  create: PokemonTypeCreateInput
  connect: PokemonTypeWhereUniqueInput
  update: PokemonTypeUpdateDataInput
  upsert: PokemonTypeUpsertNestedInput
}

input PokemonTypeUpdateWithWhereUniqueNestedInput {
  where: PokemonTypeWhereUniqueInput!
  data: PokemonTypeUpdateDataInput!
}

input PokemonTypeUpsertNestedInput {
  update: PokemonTypeUpdateDataInput!
  create: PokemonTypeCreateInput!
}

input PokemonTypeUpsertWithWhereUniqueNestedInput {
  where: PokemonTypeWhereUniqueInput!
  update: PokemonTypeUpdateDataInput!
  create: PokemonTypeCreateInput!
}

input PokemonTypeWhereInput {
  """Logical AND on all given filters."""
  AND: [PokemonTypeWhereInput!]

  """Logical OR on all given filters."""
  OR: [PokemonTypeWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [PokemonTypeWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  english: String

  """All values that are not equal to given value."""
  english_not: String

  """All values that are contained in given list."""
  english_in: [String!]

  """All values that are not contained in given list."""
  english_not_in: [String!]

  """All values less than the given value."""
  english_lt: String

  """All values less than or equal the given value."""
  english_lte: String

  """All values greater than the given value."""
  english_gt: String

  """All values greater than or equal the given value."""
  english_gte: String

  """All values containing the given string."""
  english_contains: String

  """All values not containing the given string."""
  english_not_contains: String

  """All values starting with the given string."""
  english_starts_with: String

  """All values not starting with the given string."""
  english_not_starts_with: String

  """All values ending with the given string."""
  english_ends_with: String

  """All values not ending with the given string."""
  english_not_ends_with: String
  chinese: String

  """All values that are not equal to given value."""
  chinese_not: String

  """All values that are contained in given list."""
  chinese_in: [String!]

  """All values that are not contained in given list."""
  chinese_not_in: [String!]

  """All values less than the given value."""
  chinese_lt: String

  """All values less than or equal the given value."""
  chinese_lte: String

  """All values greater than the given value."""
  chinese_gt: String

  """All values greater than or equal the given value."""
  chinese_gte: String

  """All values containing the given string."""
  chinese_contains: String

  """All values not containing the given string."""
  chinese_not_contains: String

  """All values starting with the given string."""
  chinese_starts_with: String

  """All values not starting with the given string."""
  chinese_not_starts_with: String

  """All values ending with the given string."""
  chinese_ends_with: String

  """All values not ending with the given string."""
  chinese_not_ends_with: String
  japanese: String

  """All values that are not equal to given value."""
  japanese_not: String

  """All values that are contained in given list."""
  japanese_in: [String!]

  """All values that are not contained in given list."""
  japanese_not_in: [String!]

  """All values less than the given value."""
  japanese_lt: String

  """All values less than or equal the given value."""
  japanese_lte: String

  """All values greater than the given value."""
  japanese_gt: String

  """All values greater than or equal the given value."""
  japanese_gte: String

  """All values containing the given string."""
  japanese_contains: String

  """All values not containing the given string."""
  japanese_not_contains: String

  """All values starting with the given string."""
  japanese_starts_with: String

  """All values not starting with the given string."""
  japanese_not_starts_with: String

  """All values ending with the given string."""
  japanese_ends_with: String

  """All values not ending with the given string."""
  japanese_not_ends_with: String
}

input PokemonTypeWhereUniqueInput {
  id: ID
  english: String
}

input PokemonUpdateInput {
  pokedexNumber: Int
  nameSearch: String
  name: MultiLangUpdateOneRequiredInput
  types: PokemonTypeUpdateManyInput
  base: PokemonBaseStatsUpdateOneRequiredInput
}

input PokemonWhereInput {
  """Logical AND on all given filters."""
  AND: [PokemonWhereInput!]

  """Logical OR on all given filters."""
  OR: [PokemonWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [PokemonWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  pokedexNumber: Int

  """All values that are not equal to given value."""
  pokedexNumber_not: Int

  """All values that are contained in given list."""
  pokedexNumber_in: [Int!]

  """All values that are not contained in given list."""
  pokedexNumber_not_in: [Int!]

  """All values less than the given value."""
  pokedexNumber_lt: Int

  """All values less than or equal the given value."""
  pokedexNumber_lte: Int

  """All values greater than the given value."""
  pokedexNumber_gt: Int

  """All values greater than or equal the given value."""
  pokedexNumber_gte: Int
  nameSearch: String

  """All values that are not equal to given value."""
  nameSearch_not: String

  """All values that are contained in given list."""
  nameSearch_in: [String!]

  """All values that are not contained in given list."""
  nameSearch_not_in: [String!]

  """All values less than the given value."""
  nameSearch_lt: String

  """All values less than or equal the given value."""
  nameSearch_lte: String

  """All values greater than the given value."""
  nameSearch_gt: String

  """All values greater than or equal the given value."""
  nameSearch_gte: String

  """All values containing the given string."""
  nameSearch_contains: String

  """All values not containing the given string."""
  nameSearch_not_contains: String

  """All values starting with the given string."""
  nameSearch_starts_with: String

  """All values not starting with the given string."""
  nameSearch_not_starts_with: String

  """All values ending with the given string."""
  nameSearch_ends_with: String

  """All values not ending with the given string."""
  nameSearch_not_ends_with: String
  name: MultiLangWhereInput
  types_every: PokemonTypeWhereInput
  types_some: PokemonTypeWhereInput
  types_none: PokemonTypeWhereInput
  base: PokemonBaseStatsWhereInput
}

input PokemonWhereUniqueInput {
  id: ID
  pokedexNumber: Int
}

type Query {
  pokemons(where: PokemonWhereInput, orderBy: PokemonOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Pokemon]!
  pokemonSkills(where: PokemonSkillWhereInput, orderBy: PokemonSkillOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [PokemonSkill]!
  items(where: ItemWhereInput, orderBy: ItemOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Item]!
  pokemonBaseStatses(where: PokemonBaseStatsWhereInput, orderBy: PokemonBaseStatsOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [PokemonBaseStats]!
  pokemonTypes(where: PokemonTypeWhereInput, orderBy: PokemonTypeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [PokemonType]!
  multiLangs(where: MultiLangWhereInput, orderBy: MultiLangOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [MultiLang]!
  pokemon(where: PokemonWhereUniqueInput!): Pokemon
  pokemonSkill(where: PokemonSkillWhereUniqueInput!): PokemonSkill
  item(where: ItemWhereUniqueInput!): Item
  pokemonType(where: PokemonTypeWhereUniqueInput!): PokemonType
  pokemonsConnection(where: PokemonWhereInput, orderBy: PokemonOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PokemonConnection!
  pokemonSkillsConnection(where: PokemonSkillWhereInput, orderBy: PokemonSkillOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PokemonSkillConnection!
  itemsConnection(where: ItemWhereInput, orderBy: ItemOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ItemConnection!
  pokemonBaseStatsesConnection(where: PokemonBaseStatsWhereInput, orderBy: PokemonBaseStatsOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PokemonBaseStatsConnection!
  pokemonTypesConnection(where: PokemonTypeWhereInput, orderBy: PokemonTypeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PokemonTypeConnection!
  multiLangsConnection(where: MultiLangWhereInput, orderBy: MultiLangOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): MultiLangConnection!

  """Fetches an object given its ID"""
  node(
    """The ID of an object"""
    id: ID!
  ): Node
}

type Subscription {
  pokemon(where: PokemonSubscriptionWhereInput): PokemonSubscriptionPayload
  pokemonSkill(where: PokemonSkillSubscriptionWhereInput): PokemonSkillSubscriptionPayload
  item(where: ItemSubscriptionWhereInput): ItemSubscriptionPayload
  pokemonBaseStats(where: PokemonBaseStatsSubscriptionWhereInput): PokemonBaseStatsSubscriptionPayload
  pokemonType(where: PokemonTypeSubscriptionWhereInput): PokemonTypeSubscriptionPayload
  multiLang(where: MultiLangSubscriptionWhereInput): MultiLangSubscriptionPayload
}
`

export const Prisma = makePrismaBindingClass<BindingConstructor<Prisma>>({typeDefs})

/**
 * Types
*/

export type ItemOrderByInput =   'id_ASC' |
  'id_DESC' |
  'pokedexNumber_ASC' |
  'pokedexNumber_DESC' |
  'nameSearch_ASC' |
  'nameSearch_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type MultiLangOrderByInput =   'english_ASC' |
  'english_DESC' |
  'japanese_ASC' |
  'japanese_DESC' |
  'chinese_ASC' |
  'chinese_DESC' |
  'id_ASC' |
  'id_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type MutationType =   'CREATED' |
  'UPDATED' |
  'DELETED'

export type PokemonBaseStatsOrderByInput =   'hp_ASC' |
  'hp_DESC' |
  'attack_ASC' |
  'attack_DESC' |
  'defense_ASC' |
  'defense_DESC' |
  'spAttack_ASC' |
  'spAttack_DESC' |
  'spDefense_ASC' |
  'spDefense_DESC' |
  'speed_ASC' |
  'speed_DESC' |
  'id_ASC' |
  'id_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type PokemonOrderByInput =   'id_ASC' |
  'id_DESC' |
  'pokedexNumber_ASC' |
  'pokedexNumber_DESC' |
  'nameSearch_ASC' |
  'nameSearch_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type PokemonSkillOrderByInput =   'id_ASC' |
  'id_DESC' |
  'pokedexNumber_ASC' |
  'pokedexNumber_DESC' |
  'accuracy_ASC' |
  'accuracy_DESC' |
  'power_ASC' |
  'power_DESC' |
  'pp_ASC' |
  'pp_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type PokemonTypeOrderByInput =   'id_ASC' |
  'id_DESC' |
  'english_ASC' |
  'english_DESC' |
  'chinese_ASC' |
  'chinese_DESC' |
  'japanese_ASC' |
  'japanese_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export interface ItemCreateInput {
  pokedexNumber: Int
  nameSearch: String
  name: MultiLangCreateOneInput
}

export interface ItemSubscriptionWhereInput {
  AND?: ItemSubscriptionWhereInput[] | ItemSubscriptionWhereInput | null
  OR?: ItemSubscriptionWhereInput[] | ItemSubscriptionWhereInput | null
  NOT?: ItemSubscriptionWhereInput[] | ItemSubscriptionWhereInput | null
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: ItemWhereInput | null
}

export interface ItemUpdateInput {
  pokedexNumber?: Int | null
  nameSearch?: String | null
  name?: MultiLangUpdateOneRequiredInput | null
}

export interface ItemWhereInput {
  AND?: ItemWhereInput[] | ItemWhereInput | null
  OR?: ItemWhereInput[] | ItemWhereInput | null
  NOT?: ItemWhereInput[] | ItemWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  pokedexNumber?: Int | null
  pokedexNumber_not?: Int | null
  pokedexNumber_in?: Int[] | Int | null
  pokedexNumber_not_in?: Int[] | Int | null
  pokedexNumber_lt?: Int | null
  pokedexNumber_lte?: Int | null
  pokedexNumber_gt?: Int | null
  pokedexNumber_gte?: Int | null
  nameSearch?: String | null
  nameSearch_not?: String | null
  nameSearch_in?: String[] | String | null
  nameSearch_not_in?: String[] | String | null
  nameSearch_lt?: String | null
  nameSearch_lte?: String | null
  nameSearch_gt?: String | null
  nameSearch_gte?: String | null
  nameSearch_contains?: String | null
  nameSearch_not_contains?: String | null
  nameSearch_starts_with?: String | null
  nameSearch_not_starts_with?: String | null
  nameSearch_ends_with?: String | null
  nameSearch_not_ends_with?: String | null
  name?: MultiLangWhereInput | null
}

export interface ItemWhereUniqueInput {
  id?: ID_Input | null
  pokedexNumber?: Int | null
}

export interface MultiLangCreateInput {
  english: String
  japanese: String
  chinese: String
}

export interface MultiLangCreateOneInput {
  create?: MultiLangCreateInput | null
}

export interface MultiLangSubscriptionWhereInput {
  AND?: MultiLangSubscriptionWhereInput[] | MultiLangSubscriptionWhereInput | null
  OR?: MultiLangSubscriptionWhereInput[] | MultiLangSubscriptionWhereInput | null
  NOT?: MultiLangSubscriptionWhereInput[] | MultiLangSubscriptionWhereInput | null
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: MultiLangWhereInput | null
}

export interface MultiLangUpdateDataInput {
  english?: String | null
  japanese?: String | null
  chinese?: String | null
}

export interface MultiLangUpdateInput {
  english?: String | null
  japanese?: String | null
  chinese?: String | null
}

export interface MultiLangUpdateOneRequiredInput {
  create?: MultiLangCreateInput | null
  update?: MultiLangUpdateDataInput | null
  upsert?: MultiLangUpsertNestedInput | null
}

export interface MultiLangUpsertNestedInput {
  update: MultiLangUpdateDataInput
  create: MultiLangCreateInput
}

export interface MultiLangWhereInput {
  AND?: MultiLangWhereInput[] | MultiLangWhereInput | null
  OR?: MultiLangWhereInput[] | MultiLangWhereInput | null
  NOT?: MultiLangWhereInput[] | MultiLangWhereInput | null
  english?: String | null
  english_not?: String | null
  english_in?: String[] | String | null
  english_not_in?: String[] | String | null
  english_lt?: String | null
  english_lte?: String | null
  english_gt?: String | null
  english_gte?: String | null
  english_contains?: String | null
  english_not_contains?: String | null
  english_starts_with?: String | null
  english_not_starts_with?: String | null
  english_ends_with?: String | null
  english_not_ends_with?: String | null
  japanese?: String | null
  japanese_not?: String | null
  japanese_in?: String[] | String | null
  japanese_not_in?: String[] | String | null
  japanese_lt?: String | null
  japanese_lte?: String | null
  japanese_gt?: String | null
  japanese_gte?: String | null
  japanese_contains?: String | null
  japanese_not_contains?: String | null
  japanese_starts_with?: String | null
  japanese_not_starts_with?: String | null
  japanese_ends_with?: String | null
  japanese_not_ends_with?: String | null
  chinese?: String | null
  chinese_not?: String | null
  chinese_in?: String[] | String | null
  chinese_not_in?: String[] | String | null
  chinese_lt?: String | null
  chinese_lte?: String | null
  chinese_gt?: String | null
  chinese_gte?: String | null
  chinese_contains?: String | null
  chinese_not_contains?: String | null
  chinese_starts_with?: String | null
  chinese_not_starts_with?: String | null
  chinese_ends_with?: String | null
  chinese_not_ends_with?: String | null
}

export interface PokemonBaseStatsCreateInput {
  hp: Float
  attack: Float
  defense: Float
  spAttack: Float
  spDefense: Float
  speed: Float
}

export interface PokemonBaseStatsCreateOneInput {
  create?: PokemonBaseStatsCreateInput | null
}

export interface PokemonBaseStatsSubscriptionWhereInput {
  AND?: PokemonBaseStatsSubscriptionWhereInput[] | PokemonBaseStatsSubscriptionWhereInput | null
  OR?: PokemonBaseStatsSubscriptionWhereInput[] | PokemonBaseStatsSubscriptionWhereInput | null
  NOT?: PokemonBaseStatsSubscriptionWhereInput[] | PokemonBaseStatsSubscriptionWhereInput | null
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: PokemonBaseStatsWhereInput | null
}

export interface PokemonBaseStatsUpdateDataInput {
  hp?: Float | null
  attack?: Float | null
  defense?: Float | null
  spAttack?: Float | null
  spDefense?: Float | null
  speed?: Float | null
}

export interface PokemonBaseStatsUpdateInput {
  hp?: Float | null
  attack?: Float | null
  defense?: Float | null
  spAttack?: Float | null
  spDefense?: Float | null
  speed?: Float | null
}

export interface PokemonBaseStatsUpdateOneRequiredInput {
  create?: PokemonBaseStatsCreateInput | null
  update?: PokemonBaseStatsUpdateDataInput | null
  upsert?: PokemonBaseStatsUpsertNestedInput | null
}

export interface PokemonBaseStatsUpsertNestedInput {
  update: PokemonBaseStatsUpdateDataInput
  create: PokemonBaseStatsCreateInput
}

export interface PokemonBaseStatsWhereInput {
  AND?: PokemonBaseStatsWhereInput[] | PokemonBaseStatsWhereInput | null
  OR?: PokemonBaseStatsWhereInput[] | PokemonBaseStatsWhereInput | null
  NOT?: PokemonBaseStatsWhereInput[] | PokemonBaseStatsWhereInput | null
  hp?: Float | null
  hp_not?: Float | null
  hp_in?: Float[] | Float | null
  hp_not_in?: Float[] | Float | null
  hp_lt?: Float | null
  hp_lte?: Float | null
  hp_gt?: Float | null
  hp_gte?: Float | null
  attack?: Float | null
  attack_not?: Float | null
  attack_in?: Float[] | Float | null
  attack_not_in?: Float[] | Float | null
  attack_lt?: Float | null
  attack_lte?: Float | null
  attack_gt?: Float | null
  attack_gte?: Float | null
  defense?: Float | null
  defense_not?: Float | null
  defense_in?: Float[] | Float | null
  defense_not_in?: Float[] | Float | null
  defense_lt?: Float | null
  defense_lte?: Float | null
  defense_gt?: Float | null
  defense_gte?: Float | null
  spAttack?: Float | null
  spAttack_not?: Float | null
  spAttack_in?: Float[] | Float | null
  spAttack_not_in?: Float[] | Float | null
  spAttack_lt?: Float | null
  spAttack_lte?: Float | null
  spAttack_gt?: Float | null
  spAttack_gte?: Float | null
  spDefense?: Float | null
  spDefense_not?: Float | null
  spDefense_in?: Float[] | Float | null
  spDefense_not_in?: Float[] | Float | null
  spDefense_lt?: Float | null
  spDefense_lte?: Float | null
  spDefense_gt?: Float | null
  spDefense_gte?: Float | null
  speed?: Float | null
  speed_not?: Float | null
  speed_in?: Float[] | Float | null
  speed_not_in?: Float[] | Float | null
  speed_lt?: Float | null
  speed_lte?: Float | null
  speed_gt?: Float | null
  speed_gte?: Float | null
}

export interface PokemonCreateInput {
  pokedexNumber: Int
  nameSearch: String
  name: MultiLangCreateOneInput
  types?: PokemonTypeCreateManyInput | null
  base: PokemonBaseStatsCreateOneInput
}

export interface PokemonSkillCreateInput {
  pokedexNumber: Int
  accuracy: Int
  power: Int
  pp: Int
  name: MultiLangCreateOneInput
  type: PokemonTypeCreateOneInput
}

export interface PokemonSkillSubscriptionWhereInput {
  AND?: PokemonSkillSubscriptionWhereInput[] | PokemonSkillSubscriptionWhereInput | null
  OR?: PokemonSkillSubscriptionWhereInput[] | PokemonSkillSubscriptionWhereInput | null
  NOT?: PokemonSkillSubscriptionWhereInput[] | PokemonSkillSubscriptionWhereInput | null
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: PokemonSkillWhereInput | null
}

export interface PokemonSkillUpdateInput {
  pokedexNumber?: Int | null
  accuracy?: Int | null
  power?: Int | null
  pp?: Int | null
  name?: MultiLangUpdateOneRequiredInput | null
  type?: PokemonTypeUpdateOneRequiredInput | null
}

export interface PokemonSkillWhereInput {
  AND?: PokemonSkillWhereInput[] | PokemonSkillWhereInput | null
  OR?: PokemonSkillWhereInput[] | PokemonSkillWhereInput | null
  NOT?: PokemonSkillWhereInput[] | PokemonSkillWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  pokedexNumber?: Int | null
  pokedexNumber_not?: Int | null
  pokedexNumber_in?: Int[] | Int | null
  pokedexNumber_not_in?: Int[] | Int | null
  pokedexNumber_lt?: Int | null
  pokedexNumber_lte?: Int | null
  pokedexNumber_gt?: Int | null
  pokedexNumber_gte?: Int | null
  accuracy?: Int | null
  accuracy_not?: Int | null
  accuracy_in?: Int[] | Int | null
  accuracy_not_in?: Int[] | Int | null
  accuracy_lt?: Int | null
  accuracy_lte?: Int | null
  accuracy_gt?: Int | null
  accuracy_gte?: Int | null
  power?: Int | null
  power_not?: Int | null
  power_in?: Int[] | Int | null
  power_not_in?: Int[] | Int | null
  power_lt?: Int | null
  power_lte?: Int | null
  power_gt?: Int | null
  power_gte?: Int | null
  pp?: Int | null
  pp_not?: Int | null
  pp_in?: Int[] | Int | null
  pp_not_in?: Int[] | Int | null
  pp_lt?: Int | null
  pp_lte?: Int | null
  pp_gt?: Int | null
  pp_gte?: Int | null
  name?: MultiLangWhereInput | null
  type?: PokemonTypeWhereInput | null
}

export interface PokemonSkillWhereUniqueInput {
  id?: ID_Input | null
  pokedexNumber?: Int | null
}

export interface PokemonSubscriptionWhereInput {
  AND?: PokemonSubscriptionWhereInput[] | PokemonSubscriptionWhereInput | null
  OR?: PokemonSubscriptionWhereInput[] | PokemonSubscriptionWhereInput | null
  NOT?: PokemonSubscriptionWhereInput[] | PokemonSubscriptionWhereInput | null
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: PokemonWhereInput | null
}

export interface PokemonTypeCreateInput {
  english: String
  chinese: String
  japanese: String
}

export interface PokemonTypeCreateManyInput {
  create?: PokemonTypeCreateInput[] | PokemonTypeCreateInput | null
  connect?: PokemonTypeWhereUniqueInput[] | PokemonTypeWhereUniqueInput | null
}

export interface PokemonTypeCreateOneInput {
  create?: PokemonTypeCreateInput | null
  connect?: PokemonTypeWhereUniqueInput | null
}

export interface PokemonTypeSubscriptionWhereInput {
  AND?: PokemonTypeSubscriptionWhereInput[] | PokemonTypeSubscriptionWhereInput | null
  OR?: PokemonTypeSubscriptionWhereInput[] | PokemonTypeSubscriptionWhereInput | null
  NOT?: PokemonTypeSubscriptionWhereInput[] | PokemonTypeSubscriptionWhereInput | null
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: PokemonTypeWhereInput | null
}

export interface PokemonTypeUpdateDataInput {
  english?: String | null
  chinese?: String | null
  japanese?: String | null
}

export interface PokemonTypeUpdateInput {
  english?: String | null
  chinese?: String | null
  japanese?: String | null
}

export interface PokemonTypeUpdateManyInput {
  create?: PokemonTypeCreateInput[] | PokemonTypeCreateInput | null
  connect?: PokemonTypeWhereUniqueInput[] | PokemonTypeWhereUniqueInput | null
  disconnect?: PokemonTypeWhereUniqueInput[] | PokemonTypeWhereUniqueInput | null
  delete?: PokemonTypeWhereUniqueInput[] | PokemonTypeWhereUniqueInput | null
  update?: PokemonTypeUpdateWithWhereUniqueNestedInput[] | PokemonTypeUpdateWithWhereUniqueNestedInput | null
  upsert?: PokemonTypeUpsertWithWhereUniqueNestedInput[] | PokemonTypeUpsertWithWhereUniqueNestedInput | null
}

export interface PokemonTypeUpdateOneRequiredInput {
  create?: PokemonTypeCreateInput | null
  connect?: PokemonTypeWhereUniqueInput | null
  update?: PokemonTypeUpdateDataInput | null
  upsert?: PokemonTypeUpsertNestedInput | null
}

export interface PokemonTypeUpdateWithWhereUniqueNestedInput {
  where: PokemonTypeWhereUniqueInput
  data: PokemonTypeUpdateDataInput
}

export interface PokemonTypeUpsertNestedInput {
  update: PokemonTypeUpdateDataInput
  create: PokemonTypeCreateInput
}

export interface PokemonTypeUpsertWithWhereUniqueNestedInput {
  where: PokemonTypeWhereUniqueInput
  update: PokemonTypeUpdateDataInput
  create: PokemonTypeCreateInput
}

export interface PokemonTypeWhereInput {
  AND?: PokemonTypeWhereInput[] | PokemonTypeWhereInput | null
  OR?: PokemonTypeWhereInput[] | PokemonTypeWhereInput | null
  NOT?: PokemonTypeWhereInput[] | PokemonTypeWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  english?: String | null
  english_not?: String | null
  english_in?: String[] | String | null
  english_not_in?: String[] | String | null
  english_lt?: String | null
  english_lte?: String | null
  english_gt?: String | null
  english_gte?: String | null
  english_contains?: String | null
  english_not_contains?: String | null
  english_starts_with?: String | null
  english_not_starts_with?: String | null
  english_ends_with?: String | null
  english_not_ends_with?: String | null
  chinese?: String | null
  chinese_not?: String | null
  chinese_in?: String[] | String | null
  chinese_not_in?: String[] | String | null
  chinese_lt?: String | null
  chinese_lte?: String | null
  chinese_gt?: String | null
  chinese_gte?: String | null
  chinese_contains?: String | null
  chinese_not_contains?: String | null
  chinese_starts_with?: String | null
  chinese_not_starts_with?: String | null
  chinese_ends_with?: String | null
  chinese_not_ends_with?: String | null
  japanese?: String | null
  japanese_not?: String | null
  japanese_in?: String[] | String | null
  japanese_not_in?: String[] | String | null
  japanese_lt?: String | null
  japanese_lte?: String | null
  japanese_gt?: String | null
  japanese_gte?: String | null
  japanese_contains?: String | null
  japanese_not_contains?: String | null
  japanese_starts_with?: String | null
  japanese_not_starts_with?: String | null
  japanese_ends_with?: String | null
  japanese_not_ends_with?: String | null
}

export interface PokemonTypeWhereUniqueInput {
  id?: ID_Input | null
  english?: String | null
}

export interface PokemonUpdateInput {
  pokedexNumber?: Int | null
  nameSearch?: String | null
  name?: MultiLangUpdateOneRequiredInput | null
  types?: PokemonTypeUpdateManyInput | null
  base?: PokemonBaseStatsUpdateOneRequiredInput | null
}

export interface PokemonWhereInput {
  AND?: PokemonWhereInput[] | PokemonWhereInput | null
  OR?: PokemonWhereInput[] | PokemonWhereInput | null
  NOT?: PokemonWhereInput[] | PokemonWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  pokedexNumber?: Int | null
  pokedexNumber_not?: Int | null
  pokedexNumber_in?: Int[] | Int | null
  pokedexNumber_not_in?: Int[] | Int | null
  pokedexNumber_lt?: Int | null
  pokedexNumber_lte?: Int | null
  pokedexNumber_gt?: Int | null
  pokedexNumber_gte?: Int | null
  nameSearch?: String | null
  nameSearch_not?: String | null
  nameSearch_in?: String[] | String | null
  nameSearch_not_in?: String[] | String | null
  nameSearch_lt?: String | null
  nameSearch_lte?: String | null
  nameSearch_gt?: String | null
  nameSearch_gte?: String | null
  nameSearch_contains?: String | null
  nameSearch_not_contains?: String | null
  nameSearch_starts_with?: String | null
  nameSearch_not_starts_with?: String | null
  nameSearch_ends_with?: String | null
  nameSearch_not_ends_with?: String | null
  name?: MultiLangWhereInput | null
  types_every?: PokemonTypeWhereInput | null
  types_some?: PokemonTypeWhereInput | null
  types_none?: PokemonTypeWhereInput | null
  base?: PokemonBaseStatsWhereInput | null
}

export interface PokemonWhereUniqueInput {
  id?: ID_Input | null
  pokedexNumber?: Int | null
}

/*
 * An object with an ID

 */
export interface Node {
  id: ID_Output
}

export interface AggregateItem {
  count: Int
}

export interface AggregateMultiLang {
  count: Int
}

export interface AggregatePokemon {
  count: Int
}

export interface AggregatePokemonBaseStats {
  count: Int
}

export interface AggregatePokemonSkill {
  count: Int
}

export interface AggregatePokemonType {
  count: Int
}

export interface BatchPayload {
  count: Long
}

export interface Item extends Node {
  id: ID_Output
  pokedexNumber: Int
  nameSearch: String
  name: MultiLang
}

/*
 * A connection to a list of items.

 */
export interface ItemConnection {
  pageInfo: PageInfo
  edges: Array<ItemEdge | null>
  aggregate: AggregateItem
}

/*
 * An edge in a connection.

 */
export interface ItemEdge {
  node: Item
  cursor: String
}

export interface ItemPreviousValues {
  id: ID_Output
  pokedexNumber: Int
  nameSearch: String
}

export interface ItemSubscriptionPayload {
  mutation: MutationType
  node?: Item | null
  updatedFields?: Array<String> | null
  previousValues?: ItemPreviousValues | null
}

export interface MultiLang {
  english: String
  japanese: String
  chinese: String
}

/*
 * A connection to a list of items.

 */
export interface MultiLangConnection {
  pageInfo: PageInfo
  edges: Array<MultiLangEdge | null>
  aggregate: AggregateMultiLang
}

/*
 * An edge in a connection.

 */
export interface MultiLangEdge {
  node: MultiLang
  cursor: String
}

export interface MultiLangPreviousValues {
  english: String
  japanese: String
  chinese: String
}

export interface MultiLangSubscriptionPayload {
  mutation: MutationType
  node?: MultiLang | null
  updatedFields?: Array<String> | null
  previousValues?: MultiLangPreviousValues | null
}

/*
 * Information about pagination in a connection.

 */
export interface PageInfo {
  hasNextPage: Boolean
  hasPreviousPage: Boolean
  startCursor?: String | null
  endCursor?: String | null
}

export interface Pokemon extends Node {
  id: ID_Output
  pokedexNumber: Int
  nameSearch: String
  name: MultiLang
  types?: Array<PokemonType> | null
  base: PokemonBaseStats
}

export interface PokemonBaseStats {
  hp: Float
  attack: Float
  defense: Float
  spAttack: Float
  spDefense: Float
  speed: Float
}

/*
 * A connection to a list of items.

 */
export interface PokemonBaseStatsConnection {
  pageInfo: PageInfo
  edges: Array<PokemonBaseStatsEdge | null>
  aggregate: AggregatePokemonBaseStats
}

/*
 * An edge in a connection.

 */
export interface PokemonBaseStatsEdge {
  node: PokemonBaseStats
  cursor: String
}

export interface PokemonBaseStatsPreviousValues {
  hp: Float
  attack: Float
  defense: Float
  spAttack: Float
  spDefense: Float
  speed: Float
}

export interface PokemonBaseStatsSubscriptionPayload {
  mutation: MutationType
  node?: PokemonBaseStats | null
  updatedFields?: Array<String> | null
  previousValues?: PokemonBaseStatsPreviousValues | null
}

/*
 * A connection to a list of items.

 */
export interface PokemonConnection {
  pageInfo: PageInfo
  edges: Array<PokemonEdge | null>
  aggregate: AggregatePokemon
}

/*
 * An edge in a connection.

 */
export interface PokemonEdge {
  node: Pokemon
  cursor: String
}

export interface PokemonPreviousValues {
  id: ID_Output
  pokedexNumber: Int
  nameSearch: String
}

export interface PokemonSkill extends Node {
  id: ID_Output
  pokedexNumber: Int
  name: MultiLang
  accuracy: Int
  power: Int
  pp: Int
  type: PokemonType
}

/*
 * A connection to a list of items.

 */
export interface PokemonSkillConnection {
  pageInfo: PageInfo
  edges: Array<PokemonSkillEdge | null>
  aggregate: AggregatePokemonSkill
}

/*
 * An edge in a connection.

 */
export interface PokemonSkillEdge {
  node: PokemonSkill
  cursor: String
}

export interface PokemonSkillPreviousValues {
  id: ID_Output
  pokedexNumber: Int
  accuracy: Int
  power: Int
  pp: Int
}

export interface PokemonSkillSubscriptionPayload {
  mutation: MutationType
  node?: PokemonSkill | null
  updatedFields?: Array<String> | null
  previousValues?: PokemonSkillPreviousValues | null
}

export interface PokemonSubscriptionPayload {
  mutation: MutationType
  node?: Pokemon | null
  updatedFields?: Array<String> | null
  previousValues?: PokemonPreviousValues | null
}

export interface PokemonType extends Node {
  id: ID_Output
  english: String
  chinese: String
  japanese: String
}

/*
 * A connection to a list of items.

 */
export interface PokemonTypeConnection {
  pageInfo: PageInfo
  edges: Array<PokemonTypeEdge | null>
  aggregate: AggregatePokemonType
}

/*
 * An edge in a connection.

 */
export interface PokemonTypeEdge {
  node: PokemonType
  cursor: String
}

export interface PokemonTypePreviousValues {
  id: ID_Output
  english: String
  chinese: String
  japanese: String
}

export interface PokemonTypeSubscriptionPayload {
  mutation: MutationType
  node?: PokemonType | null
  updatedFields?: Array<String> | null
  previousValues?: PokemonTypePreviousValues | null
}

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean

/*
The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point). 
*/
export type Float = number

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number
export type ID_Output = string

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number

/*
The `Long` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
*/
export type Long = string

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string