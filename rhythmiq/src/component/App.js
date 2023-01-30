import React from "react";
import { useEffect, useState } from "react";
import Library from "./Library";
import './Player.css';


import Search from "./Search";

import Playlist from "./PlayList";
import Home from "./Home";
import Navbar from "./Navbar";

import {Routes, Route, useNavigate} from "react-router-dom";
import Player from "./Player";


function App() {

  const navigator=useNavigate()
const [songs, setSongs]=useState([
//   {
//     "title": "Out of Time",
//     "artist": "The Weeknd",
//     "img_src": "./songs-images/Drake- Fire&Desire.png",
//     "src": "./songs/Drake - Fire & Desire.mp3"
// },
// {
//     "title": "SZA",
//     "artist": "I HateU",
//     "img_src": "https://is2-ssl.mzstatic.com/image/thumb/Music116/v4/f6/4f/19/f64f19b7-3ab4-ad2d-5a67-ca196d278b44/886449787043.jpg/316x316bb.webp",
//     "src": "./songs/SZA - I Hate U.mp3"
// },
// {
//     "title": "Fire&Desire",
//     "artist": "Drake",
//     "img_src": "./songs-images/Drake- Fire&Desire.png",
//     "src": "./songs/Drake - Fire & Desire.mp3"
// }
])

const [currentSongIndex,setCurrentSongIndex] = useState(0);
const [nextSongIndex,setNextSongIndex] = useState(currentSongIndex + 1);
useEffect(()=>{
  setNextSongIndex(()=>{
  if (currentSongIndex + 1 >songs.length - 1 ){
    return 0;
  } else{
    return currentSongIndex + 1;
  }
});
},[currentSongIndex])

const [playlist, setPlaylist]=useState([])

const [search, setSearch]=useState("")

const [selectedGenre, setSelectedGenre]=useState([])
const [playlistName, setPlaylistName]=useState('')
const [playsong, setPlaysong]=useState([])
const [playlistId, setPlaylistid]= useState(0)
  useEffect(()=>{
    fetch('http://localhost:3000/song').then(res=>res.json())
    .then(songs=>setSongs(songs))
  }, [])
  useEffect(()=>{
    fetch('http://localhost:3000/playlists').then(res=>res.json())
    .then(collection=>setPlaylist(collection))
  }, [])


  function handleSelection(selected){
    setSelectedGenre(selected)
  }

  function addPlaylistname(obj){
    setPlaylist([...playlist, obj])
  }
  function handleSelectedPlaylist(id){
    // console.log(id)
    playlist.map(item=>{
      if(item.id===id){
        console.log('yes')
        // setSelectedGenre(item.songs)
        setPlaylistName(item.name)
        setPlaysong(item.songs)
        setPlaylistid(item.id)
        navigator('/playlist')
      }
    })
    
  }


  return (
    <div className="App">
      <Navbar playlist={playlist}/>
      <Routes>
        <Route path='/' element={<Home songs={songs} onSelection={handleSelection}/>}></Route>
        <Route path='/library' element={<Library playlists={playlist} selectedPlaylist={handleSelectedPlaylist}/>}></Route>
        <Route path='/playlist' element={<Playlist songs={songs} selected={selectedGenre} onAddPlaylist={addPlaylistname} playlistTitle={playlistName} playsong={playsong} playlistId={playlistId}/>}></Route>
        <Route path='/player' element={<Player currentSongIndex={currentSongIndex} setCurrentSongIndex={setCurrentSongIndex} nextSongIndex={nextSongIndex} songs={songs}/>}></Route>
        <Route path='/search' element={<Search songs={songs} search = {search} setSearch = {setSearch}></Search>}></Route>

      </Routes>
    </div>
  );
}

export default App;
