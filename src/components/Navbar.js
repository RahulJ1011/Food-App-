import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'
import { State } from '../context/Context'

const Navbar = () => {
  const { search, setSearch,handleSubmit } = useContext(State);
  console.log(search);

  return (
    <nav>
      <div className='logo'>
        Food app
      </div>
      <ul>
        <form onSubmit={handleSubmit}>
        <input
          placeholder='search'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        </form>
        <li><Link className='link' to={'/'}>Home</Link></li>
        <li><Link className='link' to={'/favourites'}>Favourites</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
