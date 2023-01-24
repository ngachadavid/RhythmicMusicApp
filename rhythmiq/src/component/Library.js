import React from 'react'
import SongItem from './SongItem'

const Library = ({songs, categories}) => {
  return (
    <div className='bg-secondary text-light text-center'>
      <h3 className="py-3">Browse From our Collection</h3>
      <div className="container ">
        <div className="row g-3">

          <SongItem/>


          </div>
      </div>
    </div>
  )
}

export default Library