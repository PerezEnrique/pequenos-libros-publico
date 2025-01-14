import React from 'react';
import { SearchProvider } from './hook/SearchContext'; 
import Navbar from './components/navbar'; 
import DinamiContent from './components/dinamicContent'; 

const App = () => {
  return (
    <SearchProvider> 
      <Navbar /> 
      <DinamiContent /> 
    </SearchProvider>
  );
};

export default App;

