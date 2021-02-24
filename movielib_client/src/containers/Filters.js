import React, { Component } from 'react';
import { gql, useQuery, useLazyQuery} from '@apollo/client';

export const GENRE = gql`
  {
    genres{
      _id
      type
    }
  }
`;


export default function Filters(){
  const { loading, error, data } = useQuery(GENRE)
  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;
    return (
      <div className="genre">
      {data.genres.map((genre) => {
        console.log("genre data ",data)
        return <Filters key={genre._id}
          type={genre.type}
        />
      })}
      </div>
    );
  }
