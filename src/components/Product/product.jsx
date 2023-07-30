import React from 'react'
import "./product.css"


const product = ({src,link}) => {
  return (
    <div className='p'>
      <div className="p-browser">
        <div className="p-circle"></div>
        <div className="p-circle"></div>
        <div className="p-circle"></div>
      </div>
      <a href={link} target="_blank" rel="noopener noreferrer">
      <img src={src} alt="kkkkkk" className="p-img" />
      </a>
    </div>
  )
}

export default product
