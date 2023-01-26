import React from 'react'
    
    function PlayListDisplay({song,addSong}) {
        function handleClick(event){
        addSong(song.id)
        }

      return (
    <tr>
                    <td><img src={song.poster} class="img-fluid" style={{height:'3rem', width:'3rem'}}alt="" /></td>
        <td>{song.name}</td>
                    <td>{song.artist}</td>
            <td><button onClick={handleClick} className='btn btn-sm btn-warning'>Add</button></td>
                    </tr>

      )
    }
    
    export default PlayListDisplay