import React from 'react'

const GenreCardH = ({category}) => {
  const {genre, poster}= category
  
  return (
    <div className="col-md">
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