import React, {useState, useEffect, Component} from 'react';
import Movie from './Movie'
import { gql, useQuery} from '@apollo/client';


const FilterMoviesQuery = gql`
query($genre: String){
  filterMovies(genre:$genre){
  _id
  name
  year
  image
  language{name}
  genre{type}
}
}
`;
function FilteredMovies(props){
  console.log("In filtered movies movieid ", props.movieid)
  const [movies, setMovies] = useState([]);
  const { loading, error, data } = useQuery(FilterMoviesQuery,{ variables:{genre:props.movieid}})

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

    console.log(" filtered movies ", data)
    return (
      <div className="movies">
      {data.filterMovies.map((movie) => {
        return <Movie key={movie._id}
          name={movie.name}
          genre={movie.genre.type}
          year={movie.year}
          language={movie.language.name}
          image={movie.image}
        />
      })}

      </div>

    )
}
export default FilteredMovies
