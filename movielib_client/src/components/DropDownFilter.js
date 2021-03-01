import React, { Component, useState } from 'react';
import { gql, useQuery} from '@apollo/client';
import Select from 'react-select';
import {GENRE} from '../containers/Filters';

const LoadFilters = (props) => {
const { loading, error, data } = useQuery(GENRE)

if (loading) return 'Loading...';
if (error) return `Error! ${error.message}`;

 const options = data.genres.map(d => ({
   "value" : d._id,
   "label" : d.type

 }))
 return(
<>
   <div className="container p-5">

     <Select options={options} onChange={(e)=>{
       console.log("handler ",e)
       props.onselect(e.value)
     }}
     />

     </div>
   </>
 )
}
export default LoadFilters
