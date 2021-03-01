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
