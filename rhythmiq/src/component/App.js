import { useEffect, useState } from "react";
import Library from "./Library";


function App() {
let categories=["Country", "Pop", "RnB", "trap", "Afro Beats", 'Progressive House']
const [songs, setSongs]=useState([])
  useEffect(()=>{
    fetch('http://localhost:3000/song').then(res=>res.json())
    .then(songs=>setSongs(songs))
  }, [])
  console.log(songs)
  return (
    <div className="App">
      
      <Library songs={songs} categories={categories}/>

    </div>
  );
}

export default App;
