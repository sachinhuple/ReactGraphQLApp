import React from 'react';

const Movie = (props) => {
  return (
    <div className="card">
      <div className="container">
        <img src={props.image} alt="Movie name" width="100%" height="230px"/>
        <h2>{props.name} - {props.year}</h2>
        <h4>{props.genre} - {props.language}</h4>
        </div>
    </div>
  );
}

export default Movie;
