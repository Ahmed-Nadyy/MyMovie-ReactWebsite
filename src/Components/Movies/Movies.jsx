import Item from '../item/Item';
import React, { useEffect, useState } from 'react'
import axios from "axios"
import Loading from '../Loading/Loading';

export default function Movies() {

  let style = {
    color:"#949cb0"
  }


  const [Movies , setMovies]= useState([]);
  

  let MoviesLink = "https://api.themoviedb.org/3/trending/movie/day?api_key=52bbcddeda849047525b51d6f8a12361";

  let getTrendingMovies= async () => {
  let {data}= await axios.get(MoviesLink);
  setMovies(data.results);
}



// console.log(Movies);
  useEffect(() => {
    getTrendingMovies();
  },[])
  return (
    <div className='container'>
      {
        Movies.length > 0 ? <>
        <div className="row mb-5">
        {
          Movies.map((item,index) =>{
            return (
            <>
            <Item item={item} key={index} />
            </>
            )
          })
        }
      </div>
        </> : <Loading />
      }
    </div>
  )
}
