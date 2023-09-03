import { useQuery } from '@tanstack/react-query';
import { FC, useEffect } from 'react';
import { fetchPokemonList } from '../../../utils/api';
import Dropdown from '../../atoms/Dropdown';

export const Main: FC = () => {
  const { data: pokemonList, isLoading: pokemonListLoading } = useQuery({
    queryFn: fetchPokemonList,
    queryKey: ['pokemon-list'],
  });

  if (pokemonListLoading) {
    return <h1 className="text-3xl font-bold underline">Loading Pokemons</h1>;
  }

  return (
    <div>
      <h1 className="text-3xl font-bold underline">Pokemon App</h1>
      <Dropdown optionsArray={pokemonList} />
    </div>
  );
};

export default Main;
