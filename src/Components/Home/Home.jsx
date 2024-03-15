import React, { useEffect, useState } from 'react'
import axios from "axios"
import Item from '../item/Item';
import "./Home.css"
import Loading from '../Loading/Loading';
import Carousel from './Carousel/Carousel';

export default function Home() {
  let style = {
    color:"#949cb0"
  }


  const [Movies , setMovies]= useState([]);
  const [Tvs , setTvs]= useState([]);

  let MoviesLink = "https://api.themoviedb.org/3/trending/movie/day?api_key=52bbcddeda849047525b51d6f8a12361";
  let TvsLink ="https://api.themoviedb.org/3/trending/tv/day?api_key=52bbcddeda849047525b51d6f8a12361";
  // let itemDetails ="https://api.themoviedb.org/3/trending/tv/day?api_key=52bbcddeda849047525b51d6f8a12361"
  
  let getTrendingMovies= async () => {
  let {data}= await axios.get(MoviesLink);
  setMovies(data.results);
}
let getTrendingTvs= async () => {
  let {data}= await axios.get(TvsLink);
  setTvs(data.results);
}


// console.log(Movies);
  useEffect(() => {
    getTrendingMovies();
    getTrendingTvs();
  },[])
     
  return (
    <>
    <Carousel />
    <div className='container'>
      <>
      {
        Movies.length > 0 ? <>
        <div className="row mb-5">
          <div className="col-lg-4 col-sm-12">
               <div className="w-25 trendin-movies-top"></div>
               <p className='fs-2 my-2'> Trending <br />movies <br /> to Watch Right Now </p>
               <p style={style} >most watched movies by days</p>
               <div className="w-100 trendin-movies-top"></div>
          </div>
        {Movies.map((item,index) =>{return (<><Item item={item} key={index} /></>)})}
      </div>
      <div className="row mb-5">
          <div className="col-lg-4 col-sm-12">
               <div className="w-25 trendin-movies-top"></div>
               <p className='fs-2 my-2'> Trending <br />TV <br /> to Watch Right Now</p>
               <p style={style} >most watched Tv Show by days</p>
               <div className="w-100 trendin-movies-top"></div>
          </div>
        {
          Tvs.map((item,index) =>{
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
      </>
    </div>
    </>
  )
}
