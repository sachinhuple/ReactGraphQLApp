import React, { Component, useState } from 'react';
import Select from 'react-select';
import { gql, useQuery} from '@apollo/client';

const FilterMoviesQuery = gql`
query($genre: String){
  filterMovies(genre:$genre){
  name
  year
  image
  language{name}
  genre{type}
}
}
`;
export default FilterMoviesQuery
