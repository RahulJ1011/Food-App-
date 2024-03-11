import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { State } from '../context/Context'
import "./details.css"
const Details = () => {
  const [details,SetDetails] = useState()
  const {id} = useParams()
  console.log(id)
  const {content} = useContext(State)
  const detailsById =  async()=>
  {
    const response = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${id}`)
    const data = await response.json()
    SetDetails(data?.data)
    console.log(data?.data)
  }
  useEffect(()=>
  {
    detailsById()
  },[])
  return (
    <>
    <h1>Detail about the food</h1>
<div className='detail-container'>
      <img src={details?.recipe?.image_url} height={300} width={300} />
      <h3>{details?.recipe?.publisher}</h3>
      <h5>{details?.recipe?.title}</h5>
      <h2>INGREDIENTS:</h2>
     
        <li>{details?.recipe?.ingredients[0]?.description}</li>
        <li>{details?.recipe?.ingredients[1]?.description}</li>
        <li>{details?.recipe?.ingredients[2]?.description}</li>
        <li>{details?.recipe?.ingredients[3]?.description}</li>
        <li>{details?.recipe?.ingredients[4]?.description}</li>
        <li>{details?.recipe?.ingredients[5]?.description}</li>
     
    </div>
    </>
    
  )
}

export default Details
