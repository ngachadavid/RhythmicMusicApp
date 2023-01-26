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
    );
  }

export default Playlist



