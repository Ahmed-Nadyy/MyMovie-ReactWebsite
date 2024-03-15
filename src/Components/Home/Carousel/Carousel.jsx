import React from 'react'
import imageone from '../../../Imgs/2.webp';
import imagetwo from '../../../Imgs/1.webp';
export default function Carousel() {
    
    const divStyle ={
        height:'35rem',
      };

  return (
    <>
    <div id="carouselExampleIndicators" className="carousel slide mb-5" style={divStyle}>
      <div className="carousel-indicators bg-transparent" >
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={1} aria-label="Slide 2" />
        {/* <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={2} aria-label="Slide 3" /> */}
      </div>
      <div className="carousel-inner " style={divStyle}>
        <div className="carousel-item active " >
          <img src={imageone} className="d-block w-100 h-50" alt="..." />
        </div>
        <div className="carousel-item" >
          <img src={imagetwo} className="d-block w-100 h-50" alt="..." />
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>

  </>
  )
}
