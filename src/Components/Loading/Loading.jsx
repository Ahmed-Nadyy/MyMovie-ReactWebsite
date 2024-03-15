import React from 'react'
import "./Loading.css"

export default function Loading() {
  return (
    <div className='spinner'>
      <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
    </div>
  )
}
