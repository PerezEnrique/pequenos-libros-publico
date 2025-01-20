import React, { useState } from 'react';
import { useSearch } from '../hook/SearchContext';
import '../styles/home.css';
import { paletas } from '../utils/paletas';


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
    e.preventDefault();

    try {
      const response = await fetch(`https://pequenos-libros-publico.onrender.com/books/by-genre/${searchTerm}`);

      if (!response.ok) { 
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setResults(data); 
    } catch (error) {                 
      console.error("Error fetching data:", error);
    }
  };

  const handleButtonClick = (genre) => {
    cambiarPaleta(genre);
    handleSearch(genre);
    handleSearch({ preventDefault: () => {} });
  };

  return (
      <nav className='navbar'>
          <ul className='nav-list'>
            <div>
              <li className='Horror'><button type='button' onClick={()=>handleButtonClick("Horror")}>Terror</button></li>
              <li className='Crime'><button type='button' onClick={()=>handleButtonClick("Crime")}>Crimen</button></li>
            </div>  
            <div>
              <li className='Romance'><button type='button' onClick={()=>handleButtonClick("Romance")}>Romance</button></li>
              <li className='ScienceFiction'><button type='button' onClick={()=>handleButtonClick("ScienceFiction")}>Ciencia Ficcion</button></li>
            </div>
            <div>  
              <li className='Adventure'><button type='button' onClick={()=>handleButtonClick("Adventure")}>Aventura</button></li>
              <li className='HistorcalFiction'><button type='button' onClick={()=>handleButtonClick("HistorcalFiction")}>Ficcion Historica</button></li>
            </div>
            <div> 
              <li className='Mistery'><button type='button' onClick={()=>handleButtonClick("Mistery")}>Misterio</button></li>
              <li className='Drama'><button type='button' onClick={()=>handleButtonClick("Drama")}>Drama</button></li>
            </div>  
            <div>
              <li className='Fantasy'><button type='button' onClick={()=>handleButtonClick("Fantasy")}>Fantasia</button></li>
              <li className='Philosophy'><button type='button' onClick={()=>handleButtonClick("Philosophy")}>Filosofia</button></li>
            </div>
            <div>    
              <li className='MagicalRealism'><button type='button' onClick={()=>handleButtonClick("MagicalRealism")}>Realismo magico</button></li>
            </div>   
              <form onSubmit={handleSearch}>
                <li>
                  <input
                    type="text"
                    placeholder="Buscar..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <button type='submit' onClick={handleSearch}></button>
                </li>
              </form>
          </ul>
      </nav>

  );
};

export default Navbar;


