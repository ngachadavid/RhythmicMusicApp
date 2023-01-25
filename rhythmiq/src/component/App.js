import { useEffect, useState } from "react";
import Library from "./Library";
import Playlist from "./PlayList";


function App() {

const [songs, setSongs]=useState([])
  useEffect(()=>{
    fetch('http://localhost:3000/song').then(res=>res.json())
    .then(songs=>setSongs(songs))
  }, [])
  console.log(songs)
  return (
    <div className="App">

      <Library songs={songs}/>
      <Playlist songs={songs} />
    

    </div>
  );
}

export default App;
