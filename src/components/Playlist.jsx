import React from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';


function Albums() {
  return (
    <div>
      <div>
        <div className='d-flex justify-content-between title '  >
          <Link className=' mt-5' style={{ textDecoration: 'none' }}><h5 className='ms-2'>Playlists from our Editors</h5></Link>
          <Link className=' mt-5' style={{ textDecoration: 'none' }}><h6 className='ms-2'>show all</h6></Link>
        </div>
        <div className="container-fluid ">
          <div className="row">

            <div className="col-md-3 p-3">
              <Card className='card' style={{ width: '100%' }}>
                <Card.Img style={{ height: "150px" }} variant="top" src="https://i.scdn.co/image/ab67706f00000002a79aa912d12b40e0f1c88f39" />
                <Card.Body className='d-flex justify-content-between'>
                  <Card.Title><Link style={{ textDecoration: "none", color: "white",fontSize: "15px"  }}>An uplifting yet tasteful dinner play..</Link></Card.Title>
                  <Button style={{ visibility: "hidden", border: "none" }} className='bg-transparent button '><FontAwesomeIcon icon={faCirclePlay} className="fa-2x text-success" /></Button>
                </Card.Body>
              </Card>
            </div>

            <div className="col-md-3 p-3">
              <Card className='card' style={{ width: '100%' }}>
                <Card.Img style={{ height: "150px" }} variant="top" src="https://i.scdn.co/image/ab67706f00000002e2bb000dfdcbbcd03f0fe51e" />
                <Card.Body className='d-flex justify-content-between'>
                  <Card.Title><Link style={{ textDecoration: "none", color: "white",fontSize: "15px" }}>Put a smile on your face with these....</Link></Card.Title>
                  <Button style={{ visibility: "hidden", border: "none" }} className='bg-transparent button '><FontAwesomeIcon icon={faCirclePlay} className="fa-2x text-success" /></Button>
                </Card.Body>
              </Card>
            </div>

            <div className="col-md-3 p-3">
              <Card className='card' style={{ width: '100%' }}>
                <Card.Img style={{ height: "150px" }} variant="top" src="https://i.scdn.co/image/ab67706f00000002a6a35d85da2b230f63a0005a" />
                <Card.Body className='d-flex justify-content-between'>
                  <Card.Title ><Link style={{ textDecoration: "none", color: "white",fontSize: "15px" }}>The perfect soundtrack to those.</Link></Card.Title>
                  <Button style={{ visibility: "hidden", border: "none" }} className='bg-transparent button ' ><FontAwesomeIcon icon={faCirclePlay} className="fa-2x text-success" /></Button>
                </Card.Body>
              </Card>
            </div>

            <div className="col-md-3 p-3">
              <Card className='card' style={{ width: '100%' }}>
                <Card.Img style={{ height: "150px" }} variant="top" src="https://i.scdn.co/image/ab67706f00000002f358f6e57a4bf67935faadc7" />
                <Card.Body className='d-flex justify-content-between'>
                  <Card.Title><Link style={{ textDecoration: "none", color: "white",fontSize: "15px" }}>Uplifting anthems to power you through't.</Link></Card.Title>
                  <Button style={{ visibility: "hidden", border: "none" }} className='bg-transparent button'><FontAwesomeIcon icon={faCirclePlay} className="fa-2x text-success" /></Button>
                </Card.Body>
              </Card>
            </div>

          </div>
        </div>
      </div>

      <style>
        {`
          .name:hover {
            
          }
            .title:hover{
              text-decoration: underline !important;
            }
            .card:hover .button{
              visibility: visible !important;
            }
        `}
      </style>
    </div>
  )
}

export default Albums