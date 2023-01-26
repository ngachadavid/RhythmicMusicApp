import React, { useState } from "react";
import Library from "./Library";
import useSound from "use-sound";
import { AiFillPlayCircle, AiFillPauseCircle } from "react-icons/ai";
import { BiSkipNext, BiSkipPrevious } from "react-icons/bi";
import { IconContext } from "react-icons";


const Player = ({songs}) => {
    //state for storing current status of the player
  const [isPlaying, setIsPlaying] = useState(false);
//   const [currentSong, setCurrentSong] = useState(song[0]);
  const [play, { pause, duration, sound }] = useSound(songs);

  const playingButton = () => {
    if (isPlaying) {
      pause();
      setIsPlaying(false);
    } else {
      play();
      setIsPlaying(true);
    }
  };

  return (
    <div className="component elementp theme-bg">
      <h2>Playing Now</h2>
       <img
        className="poster"
        src="https://picsum.photos/200/200"
      />

      <div>
        <h3 className="name">Ed Sheeran</h3>
        <p className="subTitle">Ed Sheeran</p>
      </div>

      <div>
        <button className="playButton">
          <IconContext.Provider value={{ size: "3em", color: "#27AE60" }}>
            <BiSkipPrevious />
          </IconContext.Provider>
        </button>
        {!isPlaying ? (
          <button className="playButton" onClick={playingButton}>
            <IconContext.Provider value={{ size: "3em", color: "#27AE60" }}>
              <AiFillPlayCircle />
            </IconContext.Provider>
          </button>
        ) : (
          <button className="playButton" onClick={playingButton}>
            <IconContext.Provider value={{ size: "3em", color: "#27AE60" }}>
              <AiFillPauseCircle />
            </IconContext.Provider>
          </button>
        )}
        <button className="playButton">
          <IconContext.Provider value={{ size: "3em", color: "#27AE60" }}>
            <BiSkipNext />
          </IconContext.Provider>
        </button>
      </div>
    </div>
  );
};
export default Player;
