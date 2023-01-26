import React from 'react'

const GenreCardH = ({category, songs, onSelection}) => {
  const {genre, poster}= category
function handleClick(){
  console.log(genre)
  let chosenGenre=songs.filter(song=>song.category===genre)
  onSelection(chosenGenre)
}
  
  return (
    <div className="col col-md-6 col-lg-3" onClick={handleClick}>
              <div className="card bg-dark" style={{width: "12rem", height:"12%", cursor:"pointer"}}  >
                <img className="card-img-top" src={poster} alt="Card image cap" />
                <div className="card-body bg-dark">
                  <h6 className="card-title text-center">{genre}</h6>
                </div>
              </div>
      </div>
  )
}

export default GenreCardH