import { polyfill } from 'es6-promise';
import 'isomorphic-fetch';
import * as fs from 'fs';
import * as path from 'path';
import makethen from 'makethen';

import { toItem, toItemSeed, ItemSource } from './items';
import { toPokemon, toPokemonSeed, PokemonSource } from './pokemon';
import { toType, toTypeSeed, TypeSource } from './types';

polyfill();
const mkdir = makethen(fs.mkdir);
const writeFile = makethen(fs.writeFile);

const outputDir = path.join(__dirname, '../prisma');
const outputPath = path.join(outputDir, 'seed.graphql');

async function readJson<T>(res: Response) {
  return await res.json() as T;
}

async function main() {
  const typesRes = await fetch("https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/types.json");
  const typesSource = await readJson<TypeSource[]>(typesRes);
  const types = typesSource.map(type => toType(type));
  
  const pokemonRes = await fetch("https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/pokedex.json");
  const pokemonSource = await readJson<PokemonSource[]>(pokemonRes);
  const pokemon = pokemonSource.map(pokemon => toPokemon(pokemon));

  const itemsRes = await fetch("https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/items.json");
  const itemsSource = await readJson<ItemSource[]>(itemsRes);
  const items = itemsSource.map(item => toItem(item));

  const graphqlSeed = `
mutation SeedPokemon {
  ${types.map((type, index) => toTypeSeed(`type${index}`, type)).join('\n')}
  ${pokemon.map((pokemon, index) => toPokemonSeed(`pokemon${index}`, pokemon)).join('\n')}
  ${items.map((item, index) => toItemSeed(`item${index}`, item)).join('\n')}
}
  `;

  if (!(fs.existsSync(outputDir))) {
    await mkdir(outputDir)
  }

  await writeFile(outputPath, graphqlSeed);
}

main()
  .catch(err => console.error(err));
