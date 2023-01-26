import React, {useEffect, useState} from 'react'

import GenreCardH from './GenreCardH'

const Home = () => {
  const [genres, setGenres]= useState([])
  useEffect(()=>{
    fetch('http://localhost:3000/genres').then(res=>res.json())
    .then(categories=>setGenres(categories))
  }, [])
  console.log(genres)

  return (
    <div className="body-position">
    
    <div className="elementp theme-bg">
      <div className='text-light'>
        <h5 className="py-3 ms-3">Rhythmiq Genres</h5>
        <div className="container ">
          <div className="row g-3">

            {genres.map(genre=><GenreCardH category={genre} key={genre.genre}/>)}



          </div>
        </div>
      </div>
    </div>

    </div>
  )
}

export default Home