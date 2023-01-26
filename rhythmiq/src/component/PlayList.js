import React, { useEffect, useState} from 'react';
import PlayListDisplay from './PlayListDisplay';
import PlaylistAdd from './PlaylistAdd';



function Playlist({songs}) {

  const [playSongs, setPlaySongs]= useEffect([])
  function handleAddSong (selectedid) {
    console.log(selectedid);
    // console.log(songs)
     songs.map(song => {
      if (song.id === selectedid) {
          setPlaySongs([...playSongs,song])
      }
     })
   
  }
   

    
  
    



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
      
      <div className="elementp theme-bg text-light">
      <div style={{backgroundColor:'#355E3B'}}>
        <div className="d-md-flex justify-content-start align-items-center px-4" style={{height:'40%'}}>
          <div className="image-holder p-4" style={{height:'20rem', width:'20rem'}}>
            <img src="https://t2.genius.com/unsafe/295x295/https%3A%2F%2Fimages.genius.com%2F04ca8f6cc29d2ddde9e6756b92488a6f.1000x1000x1.jpg" class="img-fluid" alt="" />
          </div>
          <div className="text-holder ms-5">
            <p>Playlist</p>
            <h2>Playlist Name</h2>
            <p>2 songs</p>
          </div>
        </div>
      </div>


    );
  }

export default Playlist


      <div className='px-5' style={{backgroundColor:"rgba(0, 0, 0, 0.1)", opacity:"1"}}>
        <i class="bi bi-play-circle-fill h1 text-warning"></i>
        <div className="selected-playlist">
          <table class="table text-light">
            <thead>
              <tr>
                
                <th scope="col">Poster</th>
                <th scope="col">Title</th>
                <th scope="col">Artist</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
            {playSongs.map((song) =>  <PlaylistAdd song={song}
            /> )}
             
          
         
            </tbody>
          </table>
        </div>
      </div>
      {/* search input */}
      <div className='px-5 py-2'>
        <input type="text" />
      <button className="btn btn-success ms-5 btn-sm">Add Song</button>
      </div>
      {/* searched items table */}
      <div className="searched-playlist px-5">
        <table class="table text-light">
            <thead>
              <tr>
              
                <th scope="col">Poster</th>
                <th scope="col">Title</th>
                <th scope="col">Artist</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
            {songs.map((song) =>  <PlayListDisplay song={song}
            addSong={handleAddSong}/> )}
            
            </tbody>
          </table>
        </div>

    </div>      



    );
  }
  
export default Playlist


