import React from 'react'
import Artists from './Artists'
import Albums from './Albums'
import Radio from './Radio'
import Playlist from './Playlist'
import Footer from './Footer'

function AllItems() {
  return (
    <>
    <div className='w-100 p-3 rounded mt-4 ms-1' style={{ backgroundColor: "#222" }}>
      <div>
        <Artists/>
      </div>
      <div>
        <Albums/>
      </div>
      <div>
        <Radio/>
      </div>
      <div>
        <Playlist/>
      </div>
      <div>
        <Footer/>
      </div>
    </div>     
    </>
  )
}  

export default AllItems