import React from 'react'

function PlaylistAdd({song, onDisplay}) {
  function removeSong(){
    onDisplay(song.id)
  }
  
  return (
    <tr>
    <td><img src={song.poster} class="img-fluid" style={{height:'3rem', width:'3rem'}}alt="" /></td>
<td>{song.name}</td>
    <td>{song.artist}</td>
<td><button  className='btn btn-sm btn-warning' onClick={removeSong}>Remove</button></td>
    </tr>
  )
}

export default PlaylistAdd