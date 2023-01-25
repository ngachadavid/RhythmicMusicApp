import { useEffect, useState } from "react";
import Library from "./Library";


function App() {

const [songs, setSongs]=useState([])
  useEffect(()=>{
    fetch('http://localhost:3000/song').then(res=>res.json())
    .then(songs=>setSongs(songs))
  }, [])
  console.log(songs)
  return (
    <div className="App">
Njiru
      <h1></h1>


      <Library songs={songs}/>
 main

    </div>
  );
}

export default App;
