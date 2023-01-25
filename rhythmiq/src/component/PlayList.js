import React, { useState} from 'react';




function Playlist({songs}) {
 
    
    const [newSongTitle, setNewSongTitle] = useState('');
  
    function handleAddSong() {
      const newSong = {
        id: songs.length + 1,
        title: newSongTitle,
      };
      // setSongs([...songs, newSong]);
      setNewSongTitle('');
    }
  
    function handleDeleteSong(id) {
    //   setSongs(songs.filter((song) => song.id !== id));
    }
  console.log(songs)
    return (
      <div>
        <h1>Playlist</h1>
        <ul>
          {songs.map((song) => (
            <li key={song.id}>
              {song.name}{' '}
              <button onClick={()=>
              handleDeleteSong(song.id)}>Delete</button>
            </li>
          ))}
        </ul>
        <div>
          <input
            type="text"
            value={newSongTitle}
            onChange={(event) => setNewSongTitle(event.target.value)}
          />
          <button onClick={handleAddSong}>Add Song</button>
        </div>
      </div>
    );
  }
  
export default Playlist



        