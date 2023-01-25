import React from 'react'
import {Link} from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navposition">
      <div>
        <i className="bi bi-vinyl-fill"></i>
        <h4 className='text-warning mt-4 ms-3 '>Rhythmiq</h4>
      </div>

      <ul>
        <li>
          <i className="bi bi-house-door-fill"></i>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <i className="bi bi-search"></i>
          <Link to='/search'>Search</Link>
        </li>
        <li>
          <i className="bi bi-music-note-list"></i>
          <Link to='/library'>Your Library</Link>
        </li>
        <li>
          <i className="bi bi-file-plus"></i>
          <Link to='/playlist'>Create Playlist</Link>
        </li>
        <li>
          <i className="bi bi-balloon-heart-fill"></i>
          <Link to='/liked-songs'>Liked Songs</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar