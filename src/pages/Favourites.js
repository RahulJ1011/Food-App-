import React, { useContext } from 'react'
import { State } from '../context/Context'
import Fav from '../components/Fav'

const Favourites = () => {
  const {favourites} = useContext(State)
  return (
    <div>
    <Fav />
    </div>
  )
}

export default Favourites
