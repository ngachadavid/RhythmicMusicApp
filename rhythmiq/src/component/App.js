import { useEffect, useState } from "react";
import Library from "./Library";


function App() {

const [songs, setSongs]=useState([])
  useEffect(()=>{
    fetch('http://localhost:3000/song').then(res=>res.json())
    .then(songs=>setSongs(songs))
  }, [])
  
  return (
    <div className="App">
      <h1></h1>
      <Home/>
      <Library songs={songs}/>
      

    </div>
  );
}

export default App;
