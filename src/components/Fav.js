import React, { useContext } from 'react'
import { State } from '../context/Context'
import Main from './Main'

const Fav = () => {
  const {favourites} = useContext(State)
  return (
   
    <div>
       <h2 style={{
        margin:"30px",
        padding:"20px"
       }}>Favourites</h2>
      {favourites.map((item)=> <Main item={item} />)}
    </div>
  )
}

export default Fav
