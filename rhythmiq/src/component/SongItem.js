import React from 'react'

const SongItem = ({song}) => {
  const {id, name, poster, artist}=song
  
  return (
    <>
    <div className="col-md">
            <div className="card" style={{width: '10rem', cursor:"pointer", height:'10%'}}>
              <img className="card-img-top"
                src={poster} alt="Card image cap"/>
              <div className="card-body bg-dark">
                <h6 className="card-title">{name}</h6>
                <p class="card-text">{artist}</p>
              </div>
            </div>
          </div>
          </>
  )
}

export default SongItem