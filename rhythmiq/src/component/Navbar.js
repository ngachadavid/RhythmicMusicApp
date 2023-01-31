import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ playlist, selectedPlaylist }) => {
  function handleClick(event) {
    for (let i = 0; i < playlist.length; i++) {
      if (playlist[i].name === event.target.innerHTML) {
        selectedPlaylist(playlist[i].id);
      }
    }
  }

  return (
    <nav className="navposition">
      <div className="d-md-flex align-items-center justify-content-between mt-3 ms-3">
        <i className="bi bi-vinyl-fill"></i>
        <h4 className="text-warning">Rhythmiq</h4>
      </div>

      <ul>
        <li>
          <i className="bi bi-house-door-fill"></i>
          <Link to="/">Home</Link>
        </li>
        <li>
          <i className="bi bi-search"></i>
          <Link to="/search">Search</Link>
        </li>
        <li>
          <i className="bi bi-music-note-list"></i>
          <Link to="/library">Your Library</Link>
        </li>
        <li>
          <i className="bi bi-file-plus"></i>
          <Link to="/playlist">My Playlists</Link>
        </li>
      </ul>
      <ul className="text-light" id="playlist">
        {playlist.length === 0 ? (
          <li>No playlist</li>
        ) : (
          playlist.map((item) => (
            <li key={item.id} className="py-1" onClick={handleClick}>
              {item.name}
            </li>
          ))
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
