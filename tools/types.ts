export function toType(source: TypeSource): Type {
  return {
    english: source.english,
    chinese: source.chinese,
    japanese: source.japanese
  };
}

export function toTypeSeed(resultName: string, type: Type) {
  return `
    ${resultName}: createPokemonType(data: {
      english: "${type.english}"
      chinese: "${type.chinese}"
      japanese: "${type.japanese}"
    }) {
      id
      english
    }
  `;
}

export interface TypeSource {
  readonly english: string;
  readonly japanese: string;
  readonly chinese: string;
}

export interface Type {
  readonly english: string;
  readonly japanese: string;
  readonly chinese: string;
}
