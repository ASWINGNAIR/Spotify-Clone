import { faBook, faGlobe } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

function YourLibrary() {
  return (
    <>
      <div className='p-3 rounded mt-4 d-none d-md-block' style={{ backgroundColor: "#222", position: "fixed", width: "370px" }} >
        <Link className='d-flex mt-5' style={{ textDecoration: 'none' }}><FontAwesomeIcon icon={faBook} style={{ color: "white" }} /><h6 className='ms-2'>Your Library</h6></Link>
        <div>

          <div className='mt-4 w-100 p-3 rounded' style={{ backgroundColor: "#555" }} >
            <h6>Create your first playlist</h6>
            <p>It's easy, We'll help you</p>
            <button className=' rounded-5'>Create Playlist</button>
          </div>
          <div>
            <div className='mt-4 w-100 p-3 rounded' style={{ backgroundColor: "#555" }} >
              <h6>Let's find some podcasts to follow</h6>
              <p>We'll keep you updated on new episodes</p>
              <button className=' rounded-5'>Browse Podcasts</button>
            </div>

          </div>
          <div className='mt-5 p-2 ' >
            <Link className='text-dark ' style={{ textDecoration: "none", fontSize: "13px" }}>Legal</Link>
            <Link className='ms-4 text-dark' style={{ textDecoration: "none", fontSize: "13px" }}>Safety&Privacy center</Link>
            <Link className='ms-4 text-dark' style={{ textDecoration: "none", fontSize: "13px" }}>Privacy Policy</Link>
            <Link className='ms-4 text-dark' style={{ textDecoration: "none", fontSize: "13px" }}>Cookies</Link>
            <Link className='ms-4 text-dark' style={{ textDecoration: "none", fontSize: "13px" }}>About Ads</Link>
            <Link className='ms-4 text-dark' style={{ textDecoration: "none", fontSize: "13px" }}>Accessibility</Link>
          </div>
          <button className='m-5 rounded-5 btn border-dark'><span className='p-1'><FontAwesomeIcon icon={faGlobe} /></span>English</button>
        </div>
      </div>
    </>
  )
}

export default YourLibrary