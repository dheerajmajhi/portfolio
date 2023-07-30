import React from 'react'
import Product from "../Product/product"
import "./productList.css"
import {products} from "../../data"

const productList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">Some of my works.</h1>
        <p className="pl-desc">Here is a demonstration of the projects I created during my web development learning journey.</p>
      </div>
      <div className="pl-list">
        {products.map((item)=>(
          <Product key={item.id} src={item.img} link={item.link} />
        ))}
      </div>
    </div>
  )
}

export default productList
