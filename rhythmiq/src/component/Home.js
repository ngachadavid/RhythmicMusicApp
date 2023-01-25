import React from 'react'

const Home = () => {
  return (
    <div className="body-position">
    <nav className="navposition">
      <div>
        <i className="bi bi-vinyl-fill"></i>
        <h4 className='text-warning mt-4 ms-3 '>Rhythmiq</h4>
      </div>

      <ul>
        <li>
          <i className="bi bi-house-door-fill"></i>
          <a href="">Home</a>
        </li>
        <li>
          <i className="bi bi-search"></i>
          <a href="">Search</a>
        </li>
        <li>
          <i className="bi bi-music-note-list"></i>
        <a href="">Your Library</a>
        </li>
        <li>
          <i className="bi bi-file-plus"></i>
          <a href="">Create Playlist</a>
        </li>
        <li>
          <i className="bi bi-balloon-heart-fill"></i>
          <a href="">Liked Songs</a>
        </li>
      </ul>
    </nav>
    <div className="home">
      <div className='text-light text-center'>
        <h3 className="py-3">Browse From our Collection</h3>
        <div className="container ">
          <div className="row g-3">

            <div className="col-md">
              <div className="card bg-dark" style={{width: "14rem"}}  >
                <img className="card-img-top" src="https://t2.genius.com/unsafe/327x327/https%3A%2F%2Fimages.genius.com%2F86dcab92e27599f8556b5b8f21932449.1000x1000x1.png" alt="Card image cap" />
                <div className="card-body bg-dark">
                  <h6 className="card-title text-center">Jazz</h6>
                </div>
              </div>
            </div>



          </div>
        </div>
      </div>
    </div>

    </div>
  )
}

export default Home