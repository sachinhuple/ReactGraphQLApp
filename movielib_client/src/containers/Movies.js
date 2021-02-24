import React, { Component } from 'react';
import Movie from '../components/Movie'
import { gql, useQuery} from '@apollo/client';

const allMovies = gql`
  {
    movies {
      _id
      name
      genre {
        type
      }
      year
      language {
        name
      }
      image
    }
  }
`;

export default function Movies(props){
    if (props.movielist.length===0){
      return "No movies found for selected genre"
    }
    return (
      <div className="movies">
      {props.movielist.map((movie) => {
        return <Movie key={movie._id}
          name={movie.name}
          genre={movie.genre.type}
          year={movie.year}
          language={movie.language.name}
          image={movie.image}
        />
      })}
      </div>
    );
  }
