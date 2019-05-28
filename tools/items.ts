import { MultiLang } from './pokemon';

export function toItem(source: ItemSource): Item {
  return {
    pokedexNumber: source.id,
    name: source.name
  };
}

export function toItemSeed(resultName: string, item: Item) {
  return `
    ${resultName}: createItem(data: {
      pokedexNumber: ${item.pokedexNumber}
      nameSearch: "${item.name.english && item.name.english.toLowerCase()} ${item.name.chinese && item.name.chinese.toLowerCase()} ${item.name.japanese && item.name.japanese.toLowerCase()}"
      name: {
        create: {
          english: "${item.name.english}"
          chinese: "${item.name.chinese}"
          japanese: "${item.name.japanese}"
        }
      }
    }) {
      id
      pokedexNumber
      name {
        english
      }
    }
  `;
}

export interface ItemSource {
  id: number;
  name: MultiLang;
}

export interface Item {
  pokedexNumber: number;
  name: MultiLang;
}
