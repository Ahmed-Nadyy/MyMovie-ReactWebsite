import Item from '../item/Item';
import React, { useEffect, useState } from 'react'
import axios from "axios"
import Loading from '../Loading/Loading';

export default function Tv() {

  const [Tvs , setTvs]= useState([]);
  let TvsLink ="https://api.themoviedb.org/3/trending/tv/day?api_key=52bbcddeda849047525b51d6f8a12361";
  let getTrendingTvs= async () => {
    let {data}= await axios.get(TvsLink);
    setTvs(data.results);
  }

  useEffect(() => {
    getTrendingTvs();
  },[])


  return (
    <>
      <div className='container'>
      {
        Tvs.length > 0 ? <>
        <div className="row mb-5">
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
    </div>
    </>
  )
}
