import React from 'react'

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
          <a href="">Home</a>
        </li>
        <li>
          <i className="bi bi-search"></i>
          <a href="">Search</a>
        </li>
        <li>
          <i className="bi bi-music-note-list"></i>
        <a href="">Your Library</a>
        </li>
        <li>
          <i className="bi bi-file-plus"></i>
          <a href="">Create Playlist</a>
        </li>
        <li>
          <i className="bi bi-balloon-heart-fill"></i>
          <a href="">Liked Songs</a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar