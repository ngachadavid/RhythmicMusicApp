import { useEffect, useState } from "react";
import Library from "./Library";
import Playlist from "./PlayList";
import Home from "./Home";
import Navbar from "./Navbar";
import {Routes, Route} from "react-router-dom";


function App() {

const [songs, setSongs]=useState([])
  useEffect(()=>{
    fetch('http://localhost:3000/song').then(res=>res.json())
    .then(songs=>setSongs(songs))
  }, [])
  console.log(songs)
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/library' element={<Library songs={songs}/>}></Route>
        <Route path='/playlist' element={<Playlist songs={songs} />}></Route>
        <Route path='/player' element={<h2>put the player component here, player</h2>}></Route>
        <Route path='/search' element={<h2>put the search component here, search</h2>}></Route>
      </Routes>


    </div>
  );
}

export default App;
