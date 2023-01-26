import { useEffect, useState } from "react";
import Library from "./Library";

import Search from "./Search";

import Playlist from "./PlayList";
import Home from "./Home";
import Navbar from "./Navbar";
import {Routes, Route} from "react-router-dom";

function App() {

const [songs, setSongs]=useState([])
const [search, setSearch]=useState("")
const [selectedGenre, setSelectedGenre]=useState([])
  useEffect(()=>{
    fetch('http://localhost:3000/song').then(res=>res.json())
    .then(songs=>setSongs(songs))
  }, [])
  // console.log(songs)
  function handleSelection(selected){
    setSelectedGenre(selected)
  }
  
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home songs={songs} onSelection={handleSelection}/>}></Route>
        <Route path='/library' element={<Library songs={songs}/>}></Route>
        <Route path='/playlist' element={<Playlist songs={songs} selected={selectedGenre}/>}></Route>
        <Route path='/player' element={<h2>put the player component here, player</h2>}></Route>
        <Route path='/search' element={<Search songs={songs} search = {search} setSearch = {setSearch}></Search>}></Route>
      </Routes>
    </div>
  );
}

export default App;