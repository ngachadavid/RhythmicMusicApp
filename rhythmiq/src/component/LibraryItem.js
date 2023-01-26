import React from 'react'

const LibraryItem = ({playlist, selectedPlaylist}) => {
   function handleClick(){
    selectedPlaylist(playlist.id)
  }
  return (
    <>
    <div className="col col-lg-3 col-sm-6" onClick={handleClick}>
      <div className="card" style={{width: '13rem', cursor:"pointer", height:'15%'}}>
        
        <div className="card-body bg-decided">
          <i className="bi bi-music-note-beamed h1 text-warning"></i>
          <h6 className="card-title py-5 text-warning">{playlist.name}</h6>
          
        </div>
      </div>
    </div>
    </>
  )
}

export default LibraryItem