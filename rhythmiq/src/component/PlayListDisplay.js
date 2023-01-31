import React from "react";
import { useNavigate } from "react-router-dom";

function PlayListDisplay({ song, addSong, clickedInAdd }) {
  const navigator = useNavigate();
  function handleClick(event) {
    addSong(song.id);
  }

  function handleClicked() {
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
          onClick={handleClicked}
        ></i>
      </td>
      <td>
        <button onClick={handleClick} className="btn btn-sm btn-warning">
          Add
        </button>
      </td>
    </tr>
  );
}

export default PlayListDisplay;
