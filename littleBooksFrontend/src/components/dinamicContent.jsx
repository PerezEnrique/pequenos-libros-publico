import React from 'react';
import { useSearch } from '../hook/SearchContext'; 
import Card from "./card";

const DinamiContent = () => {
  const { results } = useSearch(); 

  return (
    <div className='dinamic-content'>
      {results.length === 0 ? (
        <p>No se encontraron resultados</p> 
      ) : (
        <div>
          {results.map((result, index) => (
            <Card
            key={index}
            image={result.image} 
            title={result.title} 
            author={result.author} 
            stock={result.stock} 
            description={result.description}
          />
          ))}
        </div>
      )}
    </div>
  );
};

export default DinamiContent;
