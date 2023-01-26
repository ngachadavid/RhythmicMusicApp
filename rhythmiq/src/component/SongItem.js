import React from 'react'


const SongItem = ({song}) => {

  

  return (
    <>
    <div className="col-md">
            <div className="card" style={{width: '13rem', cursor:"pointer", height:'15%'}}>
            <img class="card-img-top" src={song.poster} alt="Card image cap"/>
              <div className="card-body bg-dark">
              
                <p className="card-text ">{song.name}</p>
                <p className="card-text ">{song.artist}</p>
                
              </div>
            </div>
          </div>
          </>
  )
}

export default SongItem