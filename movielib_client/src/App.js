import './App.css';
import React, {useState, useEffect} from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import FilteredMovies from './components/FilteredMovies';
import { gql, useQuery} from '@apollo/client';
import LoadFilters from './components/DropDownFilter';

const App = () => {
  const [movieid, setMovieid] = useState('');

  return (
    <div>
      <Header/>
      <LoadFilters onselect={(movieid)=>setMovieid(movieid)}/>
      <FilteredMovies movieid={movieid}/>
      <Footer/>
    </div>

  );
}
export default App;
