import React from 'react'
import SongItem from './SongItem'

const Library = () => {
  return (
    <div className='elementp text-light theme-bg'>
      <h3 className="py-3 text-center">Playlist</h3>
      <div className="container ">
        <div className="row g-3">

        <SongItem/>


          </div>
      </div>
    </div>
  )
}

export default Library