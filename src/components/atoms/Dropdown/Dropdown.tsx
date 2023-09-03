import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import { FC } from 'react';
import { fetchPokemon, IPokemon } from '../../../utils/api';
import Abilities from '../Abilities';
import { IAbilites } from '../Abilities/Abilities';

interface IProp {
  optionsArray: IPokemon[];
}

const Dropdown: FC<IProp> = ({ optionsArray }) => {
  const [url, setURL] = useState('');
  const { data: abilities, refetch } = useQuery<IAbilites[]>({
    queryFn() {
      return fetchPokemon(url);
    },
    queryKey: ['pokemon-data', { url }],
    enabled: false,
  });

  const handleChangle = (e: React.ChangeEvent) => {
    e.preventDefault();
    const target = e.target as HTMLSelectElement;
    setURL(target.value);
  };

  useEffect(() => {
    if (url) {
      refetch();
    }
  }, [url]);

  return (
    <>
      <select onChange={handleChangle}>
        <option value="">Select Pokemon</option>
        {optionsArray?.map((option) => (
          <option value={option.url} key={option.url}>
            {option.name}
          </option>
        ))}
      </select>
      <Abilities abilities={abilities} />
    </>
  );
};

export default Dropdown;
