import React from 'react'
// import ReactAudioPlayer from 'react-audio-player';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

const Player = ({songPath}) => {
  const cool="../Music/WildVibes  Martin Miller ft Arild Aas  Far From You.mp3"
  return (
    <div className='elementp theme-bg p-5'>
      <AudioPlayer
    autoPlay
    src={require("../Music/WildVibes  Martin Miller ft Arild Aas  Far From You.mp3")}
    onPlay={e => console.log("onPlay")}
    // other props here
  />
      
      
    </div>
  )
}

export default Player