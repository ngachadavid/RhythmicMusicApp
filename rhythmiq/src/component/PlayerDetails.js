// PlayerDetails.js

import React from "react";

function PlayerDetails(props) {
  return (
    <div className="music-player--details">
      <div className="details-img">
        <img
          className="details-img--image"
          src={props.song.poster}
          alt={props.song.name}
        />
      </div>
      <div class="range"></div>
      <div className="artist-info">
        <h3 className="details-name">{props.song.name}</h3>
        <h4 className="details-artist">{props.song.artist}</h4>
        <div class="line"></div>
      </div>
    </div>
  );
}

export default PlayerDetails;
