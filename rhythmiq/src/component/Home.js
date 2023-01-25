import React, {useEffect, useState} from 'react'
import Navbar from './Navbar'
import GenreCardH from './GenreCardH'

const Home = () => {
  const [genres, setGenres]= useState([])
  useEffect(()=>{
    fetch('http://localhost:3000/genres').then(res=>res.json())
    .then(categories=>setGenres(categories))
  }, [])
  // console.log(genres)

  return (
    <div className="body-position">
    <Navbar/>
    <div className="home">
      <div className='text-light'>
        <h3 className="py-3 ms-3">Focus</h3>
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