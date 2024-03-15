import React from 'react'
import "./item.css"
import { Link } from 'react-router-dom';

export default function Item(props) {

  let name = props.item.name || props.item.title;
  let image = "https://image.tmdb.org/t/p/original" + props.item.poster_path;
  let rate = props.item.vote_average;
  let overview = props.item.overview;
  let id = props.item.id;
  let media_type = props.item.media_type;
  return (
    <>
      <div className="col-lg-2 col-sm-12">

          <div className="mb-4 item" >
            <Link to={`/itemDetails/${id}/${media_type}`}>
              <div>
                <img src={image} alt="" className='w-100 mb-2' />
                <div className="overlay d-flex align-items-center text-center">
                  <p>{overview.split(' ').slice(0, 10).join(' ')}</p>
                </div>
              </div>
            </Link>
            <p className='rate'>{rate.toFixed(1)}</p>
          </div>
          <div><h5>{name}</h5></div>
        </div>
    
    </>
  )
}
