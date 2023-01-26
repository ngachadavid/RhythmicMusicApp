import React, { useEffect, useState} from 'react';
import PlayListDisplay from './PlayListDisplay';
import PlaylistAdd from './PlaylistAdd';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { Navigate, useNavigate } from 'react-router-dom'





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

function Playlist({songs, selected, onAddPlaylist, playlistTitle, playsong}) {
  const navigator=useNavigate()

  const [mySongs, setMySongs]=useState(playsong)
  const [title, setTitle]=useState([])

  const [searchTerm, setSearchTerm] = useState('');
const [filteredData, setFilteredData] = useState([]);
const [data, setData] = useState([]); 
const [searchInput, setSearchInput] = useState('');


function handleSearch(e) {
    e.preventDefault();
    setFilteredData(data.filter(item => item.name.includes(searchTerm)));
  
}
 

  const [show, setShow] = useState(false);
  const [playlistName, setPlaylistName]= useState({
            "name":"yes",
            "songs":[]
        })

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);





  function handleAddSong(selectedid){
    songs.map(song => {
      if(mySongs.length===0){
        if (song.id === selectedid) {
         setMySongs([...mySongs, song])
      }

      }else{
        for(let item of mySongs){
          // console.log(item)
          if(item.id===selectedid){
            return setMySongs(mySongs)
          }else if(song.id===selectedid){

            setMySongs([...mySongs, song])
          }
        }
      }

//     function handleAddSong() {
//       const newSong = {
//         id: songs.length + 1,
//         title: newSongTitle,
//       };
//       // setSongs([...songs, newSong]);
//       setNewSongTitle('');
//     }

     })
  }
  function handleRemoveSong(id){
    let news= mySongs.filter(song=>song.id!==id)
    setMySongs(news)
  }
  function handleSubmitPlaylist(event){
    event.preventDefault()
    console.log(playlistName)
    fetch("http://localhost:3000/playlists", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(playlistName),
  }).then(res=>res.json()).
  then(data=>{
    onAddPlaylist(data)
    navigator('/library')

  })


  }
  function handleAddPlaylist(event){

    setPlaylistName({...playlistName, name:event.target.value})

  }
  function selectPlaylist(){
    navigator('/library')
  }

// console.log(search)
    return (

      <div className="elementp theme-bg text-light">
      <div className='top-playlist'>
        <div className="d-md-flex justify-content-start align-items-center px-4" style={{height:'40%'}}>
          <div className="image-holder p-4" style={{height:'20rem', width:'20rem'}}>
            <img src="https://images.pexels.com/photos/11115606/pexels-photo-11115606.jpeg?auto=compress&cs=tinysrgb&w=600" class="img-fluid" alt="" />
          </div>
          <div className="text-holder ms-5">
            {playlistTitle.length===0?
            <div>
              <button className='btn btn-success' onClick={selectPlaylist}>Select a Playlist</button>
              <p className='text-center'>OR</p>
              <Button variant="warning" onClick={handleShow}>
                Add Playlist
              </Button>
            </div>
            :
            <div>
              <p>Playlist</p>
            <h2>{playlistTitle}</h2>
            <Button variant="warning" onClick={handleShow}>
                Add a New Playlist
              </Button>
            </div>

            }

          </div>
        </div>
      </div>



      <Modal show={show} onHide={handleClose} className="text-center">
        <Modal.Header closeButton className="bg-success text-light">
          <Modal.Title >Playlist Name</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmitPlaylist}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label></Form.Label>
              <Form.Control type="text" onChange={handleAddPlaylist} placeholder="Enter desired name" />
            </Form.Group>
            <Button variant="success" type="submit" onClick={handleClose}>
              Create
            </Button>
          </Form>
        </Modal.Body>

      </Modal>



      <div className='px-5' style={{backgroundColor:"rgba(0, 0, 0, 0.1)", opacity:"1"}}>
        <div className="selected-playlist">
          {mySongs.length===0?<h5 className='text-center py-4'>Search any song to add to your playlist</h5>:
          <table class="table text-light">
            <thead>
              <tr>

                <th scope="col">Poster</th>
                <th scope="col">Title</th>
                <th scope="col">Artist</th>
                <th scope="col">Genre</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>

              {mySongs.map((song) =>  <PlaylistAdd song={song} onDisplay={handleRemoveSong}/> )}
            </tbody>
          </table>
          }

        </div>
      </div>
      {/* search input */}
      
            

          

    <div>
      <form onSubmit={handleSearch}> 
     <input type="search"
              placeholder="Search here"  />
          <button type="submit">Search</button>
      </form>
   
      {filteredData.map(item => (
          <div key={item.id}>
              {item.name}
          </div>
      ))}
    </div>
  
      {/* searched items table */}
      <div className="searched-playlist px-5">
        <table class="table text-light">
            <thead>
              <tr>

                <th scope="col">Poster</th>
                <th scope="col">Title</th>
                <th scope="col">Artist</th>
                <th scope="col">Genre</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {selected.length===0?songs.map((song) =>  <PlayListDisplay song={song}
            addSong={handleAddSong}/> ):selected.map((song) =>  <PlayListDisplay song={song}
            addSong={handleAddSong}/> )}



            </tbody>
          </table>
        </div>


    </div>



    );
  }

export default Playlist



