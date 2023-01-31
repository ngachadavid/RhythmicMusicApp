import React, { useState, useRef, useEffect } from "react";
import PlayerDetails from "./PlayerDetails";
import PlayerControls from "./PlayerControls";
import one from "../Music/avicii_wake_me_up_official_video_mp3_40141.mp3";
import two from "../Music/ayra_starr_rush_official_music_video_mp3_40507.mp3";
import three from "../Music/burna_boy_last_last_official_music_video_mp3_40444.mp3";
import four from "../Music/Chris Brown - Under The Influence.mp3";
import five from "../Music/DMA'S - Fading Like A Picture (Official Video).mp3";
import six from "../Music/Drake - Fire & Desire.mp3";
import seven from "../Music/Drake - Lemon Pepper Freestyle .mp3";
import eight from "../Music/ed_sheeran_shape_of_you_official_video_mp3_39901.mp3";
import nine from "../Music/EYEDRESS - JEALOUS (OFFICIAL VIDEO).mp3";
import ten from "../Music/EYEDRESS - ROMANTIC LOVER (OFFICIAL VIDEO).mp3";
import eleven from "../Music/Giveon - Heartbreak Anniversary .mp3";
import twelve from "../Music/Guns N' Roses - Patience.mp3";
import thirteen from "../Music/Instupendo - Six Forty Seven.mp3";
import fourteen from "../Music/Instupendo - Six Forty Seven.mp3";
import fiveteen from "../Music/J.I.D - Surround Sound.mp3";
import sixteen from "../Music/Jaymes Young - Happiest Year [Official Music Video].mp3";
import seventeen from "../Music/Jaymes Young - Infinity [Official Audio].mp3";
import eighteen from "../Music/Lil Uzi Vert - Just Wanna Rock.mp3";
import nineteen from "../Music/maroon_5_one_more_night_mp3_40395.mp3";
import twenty from "../Music/monalisa_lojay_x_sarz_x_chris_brown_mp3_40898.mp3";
import twentyone from "../Music/Afrojack-Ten Feet Tall.mp3";
import twentytwo from "../Music/Alan Walker - Faded.mp3";
import twentythree from "../Music/Alan Walker-Style  Memory.mp3";
import twentyfour from "../Music/Wildvibes-Flashing Lights.mpeg";
import twentyfive from "../Music/WildVibes  Martin Miller ft Arild Aas  Far From You.mp3";
import twentysix from "../Music/Brett Eldredge - The Long Way (Official Music Video).mp3";
import twentyseven from "../Music/Brett Young - In Case You Didn't Know.mp3";
import twentyeight from "../Music/Dylan Schneider - How Does It Sound .mp3";
import twentynine from "../Music/Old Dominion-Written in the sand.mp3";
import thirty from "../Music/Scotty McCreery - The Trouble With Girls.mp3";
import thirtyone from "../Music/Playboi Carti - Magnolia.mp3";
import thirtytwo from "../Music/rihanna_diamonds_mp3_40229.mp3";
import thirtythree from "../Music/Rival Sons - Nobody Wants To Die [Official Video].mp3";
import thirtyfour from "../Music/Seekae - Test & Recognise (Flume Re-Work).mp3";
import thirtyfive from "../Music/SZA - I Hate U.mp3";
import thirtysix from "../Music/The Weeknd - Out of Time.mp3";
import thirtyseven from "../Music/tiwa_savage_asake_loaded_official_video_mp3_41078.mp3";
import thirtyeight from "../Music/tones_and_i_dance_monkey_official_video_mp3_40292.mp3";
import thirtynine from "../Music/victony_tempoe_soweto_official_video_mp3_40605.mp3";
import forty from "../Music/Yeat - Out the way.mp3";
import source from "../Music/Yeat - Out the way.mp3";

function Player(props) {
  const audioElement = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const sites = [
    one,
    two,
    three,
    four,
    five,
    six,
    seven,
    eight,
    nine,
    ten,
    eleven,
    twelve,
    thirteen,
    fourteen,
    fiveteen,
    sixteen,
    seventeen,
    eighteen,
    nineteen,
    twenty,
    twentyone,
    twentytwo,
    twentythree,
    twentyfour,
    twentyfive,
    twentysix,
    twentyseven,
    twentyeight,
    twentynine,
    thirty,
    thirtyone,
    thirtytwo,
    thirtythree,
    thirtyfour,
    thirtyfive,
    thirtysix,
    thirtyseven,
    thirtyeight,
    thirtynine,
    forty,
  ];
  let nrm = props.songs[props.currentSongIndex].mp3;

  let path = sites.filter((site) => {
    if (site.includes(nrm)) {
      return site;
    }
  });
  let mp3 = path[0];
  console.log(mp3);

  useEffect(() => {
    if (isPlaying) {
      audioElement.current.play();
    } else {
      audioElement.current.pause();
    }
  });

  const SkipSong = (forwards = true) => {
    if (forwards) {
      props.setCurrentSongIndex(() => {
        let temp = props.currentSongIndex;
        temp++;

        if (temp > props.songs.length - 1) {
          temp = 0;
        }

        return temp;
      });
    } else {
      props.setCurrentSongIndex(() => {
        let temp = props.currentSongIndex;
        temp--;

        if (temp < 0) {
          temp = props.songs.length - 1;
        }

        return temp;
      });
    }
  };

  return (
    <div className=" theme-bg">
      <p>
        <div className="text-anim text-light">
          <strong>Upcoming Song:</strong>
        </div>

        <div className="nextsong-details text-info">
          <img
            src={props.songs[props.nextSongIndex].poster}
            alt={props.songs[props.nextSongIndex].name}
            style={{ width: "4em", height: "auto" }}
          />
          <p>
            <b>{props.songs[props.nextSongIndex].name} </b>&nbsp; by &nbsp;
            <b>{props.songs[props.nextSongIndex].artist}</b>
          </p>
        </div>
      </p>
      <div className="music-player">
        <audio autoplay src={mp3} ref={audioElement}></audio>
        <PlayerDetails song={props.songs[props.currentSongIndex]} />

        <PlayerControls
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
          SkipSong={SkipSong}
        />

        <div class="player__footer">
          <ul class="list list--footer">
            <li>
              <a href="#" class="list__link">
                <i class="fa fa-heart-o"></i>
              </a>
            </li>

            <li>
              <a href="#" class="list__link">
                <i class="fa fa-random"></i>
              </a>
            </li>

            <li>
              <a href="#" class="list__link">
                <i class="fa fa-undo"></i>
              </a>
            </li>

            <li>
              <a href="#" class="list__link">
                <i class="fa fa-ellipsis-h"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Player;

// import React from 'react'
// // import ReactAudioPlayer from 'react-audio-player';
// import AudioPlayer from 'react-h5-audio-player';
// import 'react-h5-audio-player/lib/styles.css';

// const Player = ({songPath}) => {
//   const cool="../Music/WildVibes  Martin Miller ft Arild Aas  Far From You.mp3"
//   return (
//     <div className=' theme-bg p-5'>
//       <AudioPlayer
//     autoPlay
//     src={require("../Music/WildVibes  Martin Miller ft Arild Aas  Far From You.mp3")}
//     onPlay={e => console.log("onPlay")}
//     // other props here
//   />

//     </div>
//   )
// }

// export default Player
