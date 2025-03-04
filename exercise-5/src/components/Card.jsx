import React from 'react'

const Card = ({ data }) => {
  return (
    <div className="card">
        <h4>{ data.title }</h4>
        <small>{ data.category }</small>
        <p>{ data.description }</p>
        <img src={data.image} alt="" />
    </div>
  )
}

export default Card