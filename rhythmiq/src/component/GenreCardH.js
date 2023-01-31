import React from "react";
import { useNavigate } from "react-router-dom";

const GenreCardH = ({ category, songs, onSelection }) => {
  const navigator = useNavigate();
  const { genre, poster } = category;
  function handleClick() {
    let chosenGenre = songs.filter((song) => song.category === genre);
    onSelection(chosenGenre);
    navigator("/playlist");
  }

  return (
    <div className="col-6 col-md-4 col-lg-2 " onClick={handleClick}>
      <div
        className="card bg-dark"
        style={{ width: "8rem", height: "12%", cursor: "pointer" }}
      >
        <img className="card-img-top" src={poster} alt="Card image cap" />
        <div className="card-body bg-dark ">
          <h6 className="card-title text-center">{genre}</h6>
        </div>
      </div>
    </div>
  );
};

export default GenreCardH;
