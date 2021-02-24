import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Movies from './containers/Movies';
import { gql, useQuery} from '@apollo/client';
import FilterMoviesQuery from './containers/FilterQuery';
import {loadMovies, loadFilterMovies} from './requests';
import LoadFilters from './components/DropDownFilter'


const App = () => {
  const [movies, setMovies] = useState([]);
  const [movieid, setMovieid] = useState([]);
  useEffect(async () => {
    const movie_data = await loadMovies()
     console.log(" moviedata ",movie_data)
     setMovies(movie_data)
  },[]);

  const OnMovieSelect = async (movieid) =>{
   const movie_data = await loadFilterMovies(movieid)
    console.log("selected movieid ",movie_data)
    setMovies(movie_data)
    setMovieid(movieid)
  }

  return (
    <div>
      <Header/>
      <LoadFilters onselect = {OnMovieSelect}/>
      <Movies movielist ={ movies} />
      <Footer/>
    </div>

  );
}
export default App;
