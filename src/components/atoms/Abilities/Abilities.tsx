import React, { FC } from 'react';

export interface IAbilites {
  abilities: {
    ability: {
      name: string;
      url: string;
    };
  }[];
}

interface IProp {
  abilities: IAbilites[];
}

const Ablitites: FC<IAbilites> = ({ abilities }) => {
  if (abilities) {
    return (
      <>
        <h3>Abilities</h3>
        {abilities.map(({ ability }) => (
          <li key={ability.name}>{ability.name}</li>
        ))}
      </>
    );
  }
  return null;
};

export default Ablitites;
