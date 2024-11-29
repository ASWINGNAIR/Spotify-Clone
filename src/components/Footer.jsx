import { faFacebook, faInstagram, faLinkedin, faTwitter, faWhatsapp} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'


function Footer() {
  return (
    <div className='py-5 px-4'>
      <div className="container-fluid">
        <div className="row">

        <div className="col-md-2 d-md-flex justify-content-center mt-4 mt-md-0">
            <div>
              <h5>Company</h5>
              <Link style={{textDecoration:"none", color:"grey"}}><p className='mt-3 link' >About</p></Link>
              <Link style={{textDecoration:"none", color:"grey"}}><p className=' link'>Jobs</p></Link>
              <Link style={{textDecoration:"none", color:"grey"}}><p className=' link'>For the Record</p></Link>
            </div>
          </div>

          <div className="col-md-2 d-md-flex justify-content-center mt-4 mt-md-0">
            <div>
              <h5>Communities</h5>
              <Link style={{textDecoration:"none", color:"grey"}}><p className='mt-3 link'>For Artists</p></Link>
              <Link style={{textDecoration:"none", color:"grey"}}><p className=' link'>Developers</p></Link>
              <Link style={{textDecoration:"none", color:"grey"}}><p className=' link'>Advertising</p></Link>
              <Link style={{textDecoration:"none", color:"grey"}}><p className=' link'>Investors</p></Link>
              <Link style={{textDecoration:"none", color:"grey"}}><p className=' link'>Vendors</p></Link>
            </div>
          </div>

          <div className="col-md-2 d-md-flex justify-content-center mt-4 mt-md-0">
            <div>
              <h5>Useful links</h5>
              <Link style={{textDecoration:"none", color:"grey"}}><p className='mt-3 link' >Support</p></Link>
              <Link style={{textDecoration:"none", color:"grey"}}><p className=' link'>Free Mobile App</p></Link>
            </div>
          </div>

          <div className="col-md-3 px-md-5 mt-4 mt-md-0">
            <div>
              <h5>Spotify Plans</h5>
              <Link style={{textDecoration:"none", color:"grey"}}><p className='mt-3 link'>Premium Individual</p></Link>
              <Link style={{textDecoration:"none", color:"grey"}}><p className=' link'>Premium Duo</p></Link>
              <Link style={{textDecoration:"none", color:"grey"}}><p className=' link'>Premium Family</p></Link>
              <Link style={{textDecoration:"none", color:"grey"}}><p className=' link'>Premium Student</p></Link>
              <Link style={{textDecoration:"none", color:"grey"}}><p className=' link'>Spotify Free</p></Link>
            </div>
          </div>

          <div className="col-md-3 px-md-5 mt-4 mt-md-0">
            <div className="d-flex justify-content-between mt-3 ">
            <FontAwesomeIcon icon={faInstagram} className='fa-2x'/>
            <FontAwesomeIcon icon={faTwitter} className='fa-2x' />
            <FontAwesomeIcon icon={faFacebook} className='fa-2x'/>
            </div>
          </div>

        </div>
      </div>

      <hr />

      <p className='mt-5'>© 2024 Spotify AB</p>


      <style>
{`
  .link:hover{
    text-decoration: underline !important;
  }
    }
`}
</style>

    </div>
  )
}

export default Footer