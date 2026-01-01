import React from 'react'
import "../App.css"

export default function ProductPage({img,title}) {
  return (
    <div className="product-card"><img  className="product-img" src={img} alt={title} />
      <p>{title}</p></div>
  )
}
