export function toPokemon(source: PokemonSource): Pokemon {
  const base: PokemonBaseStats = {
    attack: source.base.Attack,
    defense: source.base.Defense,
    hp: source.base.HP,
    spAttack: source.base['Sp. Attack'],
    spDefense: source.base['Sp. Defense'],
    speed: source.base.Speed
  };

  return {
    pokedexNumber: source.id,
    name: source.name,
    type: source.type,
    base
  };
}

export function toPokemonSeed(resultName: string, pokemon: Pokemon) {
  return `
    ${resultName}: createPokemon(data: {
      pokedexNumber: ${pokemon.pokedexNumber}
      nameSearch: "${pokemon.name.english.toLowerCase()} ${pokemon.name.chinese.toLowerCase()} ${pokemon.name.japanese.toLowerCase()}"
      name: {
        create: {
          english: "${pokemon.name.english}"
          chinese: "${pokemon.name.chinese}"
          japanese: "${pokemon.name.japanese}"
        }
      }
      types: {
        connect: [${pokemon.type.map(type => `{
          english: "${type}"
        }`)}]
      }
      base: {
        create: {
          attack: ${pokemon.base.attack}
          defense: ${pokemon.base.defense}
          hp: ${pokemon.base.hp}
          spAttack: ${pokemon.base.spAttack}
          spDefense: ${pokemon.base.spDefense}
          speed: ${pokemon.base.speed}
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

export interface MultiLang {
  readonly english: string;
  readonly japanese: string;
  readonly chinese: string;
}

export interface PokemonStatsSource {
  readonly HP: number;
  readonly Attack: number;
  readonly Defense: number;
  readonly 'Sp. Attack': number;
  readonly 'Sp. Defense': number;
  readonly Speed: number;
}

export interface PokemonBaseStats {
  readonly hp: number;
  readonly attack: number;
  readonly defense: number;
  readonly spAttack: number;
  readonly spDefense: number;
  readonly speed: number;
}

export interface PokemonSource {
  readonly id: string;
  readonly name: MultiLang;
  readonly type: string[];
  readonly base: PokemonStatsSource;
}

export interface Pokemon {
  readonly pokedexNumber: string;
  readonly name: MultiLang;
  readonly type: string[];
  readonly base: PokemonBaseStats;
}
