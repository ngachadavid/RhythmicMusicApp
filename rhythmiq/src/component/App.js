import { useEffect, useState } from "react";
import Library from "./Library";


import Search from "./Search";

import Playlist from "./PlayList";
import Home from "./Home";
import Navbar from "./Navbar";
import {Routes, Route, useNavigate} from "react-router-dom";

function App() {

  const navigator=useNavigate()
const [songs, setSongs]=useState([])

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
        <Route path='/player' element={<h2>put the player component here, player</h2>}></Route>
        <Route path='/search' element={<Search songs={songs} search = {search} setSearch = {setSearch}></Search>}></Route>
      </Routes>
    </div>
  );
}

export default App;