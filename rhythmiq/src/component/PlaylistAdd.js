import React from 'react'

function PlaylistAdd({song, onDisplay}) {
  
  return (
    <tr>
    <td><img src={song.poster} class="img-fluid" style={{height:'3rem', width:'3rem'}}alt="" /></td>
<td>{song.name}</td>
    <td>{song.artist}</td>
<td><button  className='btn btn-sm btn-warning'>Remove</button></td>
    </tr>
  )
}

export default PlaylistAdd