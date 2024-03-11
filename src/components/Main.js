import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Main.css';
import { State } from '../context/Context';

const Main = ({ item }) => {
  const { handleFavourite, favourites } = useContext(State);
  let check;

  return (
    <div className='containers'>
      <img src={item?.image_url} height={200} width={300} />
      <span>{item?.publisher}</span>
      <h2>{item?.title}</h2>
      <button className='btn' onClick={() => handleFavourite(item)}>
        {check = favourites.find((items) => items.id === item.id) ? "Remove from favourites" : "Add to favourites"}
      </button>
      <Link className='link' to={`recipe/${item?.id}`}>Click here for details</Link>
    </div>
  );
};

export default Main;
