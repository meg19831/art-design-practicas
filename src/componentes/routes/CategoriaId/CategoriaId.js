import React, { useState, useEffect } from 'react';

import { useParams } from 'react-router-dom';

const NosotrosId = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState({});

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/photos${id}`)
      .then((res) => res.json())
      .then(setCharacter);
  }, [id]);

  return (
    <div>
      <p>Name: {character?.name}</p>
      <p>Height: {character?.height}</p>
    </div>
  );
};

export default NosotrosId;