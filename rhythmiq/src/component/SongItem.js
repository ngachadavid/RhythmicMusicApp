import React from "react";
import { useNavigate } from "react-router-dom";

const SongItem = ({ song, clickedInAdd }) => {
  const navigator = useNavigate();
  function handleClick() {
    clickedInAdd(song.id);
    navigator("/player");
  }

  return (
    <>
      <div className=" col-6 col-md-3 col-lg-2">
        <div
          className="card bg-dark"
          onClick={handleClick}
          style={{ width: "10rem", cursor: "pointer", height: "17rem" }}
        >
          <div className=" top-hover">
            <img class="card-img-top" src={song.poster} alt="Card image cap" />
            <div className="card-body bg-dark">
              <p className="card-text text-warning">{song.name}</p>
              <p className="card-text ">{song.artist}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SongItem;
