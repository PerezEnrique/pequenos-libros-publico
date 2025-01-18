import React, { useState } from 'react';
import { useSearch } from '../hook/SearchContext';
import '../styles/home.css';
import { paletas } from '../utils/paletas';
import { FIND_BOOKS } from '../settings';


const Navbar = () => {

  //cambia la paleta de colores de la pagina segun el genero de libro
  const cambiarPaleta = (nombrePaleta) => {
    const paleta = paletas[nombrePaleta];
    for (const variable in paleta) {
      document.documentElement.style.setProperty(variable, paleta[variable]);
    }
  };

  //buscar segun autor o nombre de libro
  const [searchTerm, setSearchTerm] = useState(""); 
  const { setResults } = useSearch(); 

  const handleSearch = async (e) => {
    try {
      const response = await fetch(`${FIND_BOOKS}${searchTerm}`);
      const data = await response.json();
      setResults(data); 
    } catch (error) {                 
      console.error("Error fetching data:", error);
    }
  };

  const handleButtonClick = (genre) => {
    cambiarPaleta(genre);
    handleSearch(genre);
  };

  return (
      <nav className='navbar'>
          <ul className='nav-list'>
              <li className='terror'><button onClick={()=>handleButtonClick("terror")}>Terror</button></li>
              <li className='crimen'><button onClick={()=>handleButtonClick("crimen")}>Crimen</button></li>
              <li className='romance'><button onClick={()=>handleButtonClick("romance")}>Romance</button></li>
              <li className='cienciaFicion'><button onClick={()=>handleButtonClick("cienciaFiccion")}>Ciencia Ficcion</button></li>
              <li className='aventura'><button onClick={()=>handleButtonClick("aventura")}>Aventura</button></li>
              <li className='otros'><button onClick={()=>handleButtonClick("otros")}>Otros</button></li>
              <form>
                <li>
                  <input
                    type="text"
                    placeholder="Buscar..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <button onClick={handleSearch}></button>
                </li>
              </form>
          </ul>
      </nav>

  );
};

export default Navbar;


