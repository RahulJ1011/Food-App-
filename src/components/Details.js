import React, { useContext } from 'react'
import { State } from '../context/Context'
import Main from './Main'
import './details.css'
const Details = () => {
  const {content,loading} = useContext(State)
  return (
    <div>
      {
        loading ? <h1>The content is loading</h1>
        : <div className='container'>
          {content.map(item => <Main item={item} />)}
        </div>
      }
    </div>
  )
}

export default Details
