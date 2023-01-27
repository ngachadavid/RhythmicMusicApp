import React from 'react'
import Player from './Player'
import {useNavigate} from "react-router-dom";

function PlaylistAdd({song, onDisplay}) {
  const navigator = useNavigate()
  function removeSong(){
    onDisplay(song.id)
  }
  function handleClick(){
    <Player songPath={song.mp3}/>
    navigator('/player')

  }
  
  return (
    <tr onClick={handleClick}>
    <td><img src={song.poster} class="img-fluid" style={{height:'3rem', width:'3rem'}}alt="" /></td>
<td>{song.name}</td>
    <td>{song.artist}</td>
    <td>{song.category}</td>
<td><button  className='btn btn-sm btn-warning' onClick={removeSong}>Remove</button></td>
    </tr>
  )
}

export default PlaylistAdd