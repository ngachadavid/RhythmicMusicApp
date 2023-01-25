import React from 'react'
import Navbar from './Navbar'

const Home = () => {
  return (
    <div className="body-position">
    <Navbar/>
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