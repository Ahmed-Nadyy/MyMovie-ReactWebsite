import React, { useEffect, useState } from 'react'
import axios from "axios"
import { useParams } from 'react-router-dom';
import { getDetails } from '../../Api/Api';
import Loading from '../Loading/Loading';

export default function ItemDetails() {
    let x=useParams();
    // console.log(x.media);
    // let [y,setY] = useState([]);

    const [itemDetails , setItemDetails]= useState('');
    async function getitemDetails() {
        let details= await getDetails(x.id,x.media);
        setItemDetails(details);
        // console.log(details);
      }
    
    useEffect(() => {
        getitemDetails();
        
      },[])
      console.log(itemDetails);
      
    // y.map((r, i)=>console.log("t"))
    // let{one,two,three}=y;


    // let image = "https://api.themoviedb.org/3/"+itemDetails.poster_path;

  return (
    <>
      {itemDetails?<>
        <div className="container">
        <div className="row">
        <div className="col-4 ">
            <img className='w-100' src={`https://image.tmdb.org/t/p/w500${itemDetails.poster_path}`} alt="" />
        </div>
        <div className="col-8 d-block">
            <h1>{itemDetails.title}</h1>
            {/* <span>{itemDetails.genres.id}</span> */}
            {itemDetails.genres.map((r, i)=><span key={i} className='badge bg-info p-2 mx-2 mb-3'>{r.name}</span>)}
            <ul className='mx-0'>
              <li className='item my-5 mx-0'><span>Vote : </span>{itemDetails.vote_average}</li>
              <li className='item my-5 mx-0'><span>Vote Count : </span>{itemDetails.vote_count}</li>
              <li className='item my-5 mx-0'><span>popularity : </span>{itemDetails.popularity}</li>
              <li className='item my-5 mx-0'><span>release date : </span>{itemDetails.release_date}</li>
            </ul>  
            <p style={{color:"#949cb0"}}>{itemDetails.overview}</p>
        </div>
      </div>
      </div>
      </>: <Loading/>}
    </>
  )
}
