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
          <Link className=' mt-5' style={{ textDecoration: 'none' }}><h5 className='ms-2'>Popular Radio</h5></Link>
          <Link className=' mt-5' style={{ textDecoration: 'none' }}><h6 className='ms-2'>show all</h6></Link>
        </div>
        <div className="container-fluid ">
          <div className="row">

            <div className="col-md-3 p-3">
              <Card className='card' style={{ width: '100%' }}>
                <Card.Img style={{ height: "150px" }} variant="top" src="https://pickasso.spotifycdn.com/image/ab67c0de0000deef/dt/v1/img/radio/artist/4YRxDV8wJFPHPTeXepOstw/en" />
                <Card.Body className='d-flex justify-content-between'>
                  <Card.Title><Link className='name' style={{ textDecoration: "none", color: "white",fontSize: "15px"  }}>With Sachin-Jigar, Amit Trivedi,Mitho..</Link></Card.Title>
                  <Button style={{ visibility: "hidden", border: "none" }} className='bg-transparent button '><FontAwesomeIcon icon={faCirclePlay} className="fa-2x text-success" /></Button>
                </Card.Body>
              </Card>
            </div>

            <div className="col-md-3 p-3">
              <Card className='card' style={{ width: '100%' }}>
                <Card.Img style={{ height: "150px" }} variant="top" src="https://pickasso.spotifycdn.com/image/ab67c0de0000deef/dt/v1/img/radio/artist/2FKWNmZWDBZR4dE5KX4plR/en" />
                <Card.Body className='d-flex justify-content-between'>
                  <Card.Title><Link className='name' style={{ textDecoration: "none", color: "white",fontSize: "15px" }}>With Shubh,Karan Aujla,AP Dhillon &..</Link></Card.Title>
                  <Button style={{ visibility: "hidden", border: "none" }} className='bg-transparent button '><FontAwesomeIcon icon={faCirclePlay} className="fa-2x text-success" /></Button>
                </Card.Body>
              </Card>
            </div>

            <div className="col-md-3 p-3">
              <Card className='card' style={{ width: '100%' }}>
                <Card.Img style={{ height: "150px" }} variant="top" src="https://pickasso.spotifycdn.com/image/ab67c0de0000deef/dt/v1/img/radio/artist/4fEkbug6kZzzJ8eYX6Kbbp/en" />
                <Card.Body className='d-flex justify-content-between'>
                  <Card.Title ><Link className='name' style={{ textDecoration: "none", color: "white",fontSize: "15px" }}>With Mohit Chauhan ,Armaan Malik,...</Link></Card.Title>
                  <Button style={{ visibility: "hidden", border: "none" }} className='bg-transparent button ' ><FontAwesomeIcon icon={faCirclePlay} className="fa-2x text-success" /></Button>
                </Card.Body>
              </Card>
            </div>

            <div className="col-md-3 p-3">
              <Card className='card' style={{ width: '100%' }}>
                <Card.Img style={{ height: "150px" }} variant="top" src="https://pickasso.spotifycdn.com/image/ab67c0de0000deef/dt/v1/img/radio/artist/0oOet2f43PA68X5RxKobEy/en" />
                <Card.Body className='d-flex justify-content-between'>
                  <Card.Title><Link className='name' style={{ textDecoration: "none", color: "white",fontSize: "15px" }}>With A R Rahman ,Atif Aslam,Shankar-</Link></Card.Title>
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