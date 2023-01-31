import React from "react";
import { useNavigate } from "react-router-dom";

function PlaylistAdd({ song, onDisplay, clickedInAdd }) {
  const navigator = useNavigate();
  function removeSong() {
    onDisplay(song.id);
  }
  
  function handleClick() {
    clickedInAdd(song.id);
    navigator("/player");
  }

  return (
    <tr>
      <td>
        <img
          src={song.poster}
          class="img-fluid"
          style={{ height: "3rem", width: "3rem" }}
          alt=""
        />
      </td>
      <td>{song.name}</td>
      <td>{song.artist}</td>
      <td>{song.category}</td>
      <td>
        <i
          class="bi bi-play-fill text-warning h3 cursor-pointer"
          onClick={handleClick}
        ></i>
      </td>
      <td>
        <button className="btn btn-sm btn-warning" onClick={removeSong}>
          Remove
        </button>
      </td>
    </tr>
  );
}

export default PlaylistAdd;
