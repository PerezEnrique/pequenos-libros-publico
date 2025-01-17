import React from 'react';
import { useSearch } from '../hook/SearchContext'; 
import Card from "./card";

const DinamicCards= () => {
  const { results } = useSearch(); 

  return (
    <div className='cart'>
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

export default DinamicCards;
