import { useEffect, useState } from "react";


function App() {
const [songs, setSongs]=useState([])
  useEffect(()=>{
    fetch('http://localhost:3000/song').then(res=>res.json())
    .then(songs=>setSongs(songs))
  }, [])
  console.log(songs)
  return (
    <div className="App">
      <h1></h1>

    </div>
  );
}

export default App;
