import { pokemonList } from '../constants';

export interface IPokemon {
  name: string;
  url: string;
}

export const fetchPokemonList = async (): Promise<IPokemon> => {
  const response = await fetch(pokemonList);
  const { results } = await response.json();
  return results;
};

export const fetchPokemon = async (url: string): Promise<{}> => {
  const response = await fetch(url);
  const { abilities } = await response.json();
  return abilities;
};
