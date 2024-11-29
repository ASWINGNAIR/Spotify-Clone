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
          <Link className=' mt-5' style={{ textDecoration: 'none' }}><h5 className='ms-2'>Popular albums and singles</h5></Link>
          <Link className=' mt-5' style={{ textDecoration: 'none' }}><h6 className='ms-2'>show all</h6></Link>
        </div>
        <div className="container-fluid ">
          <div className="row">

            <div className="col-md-3 p-3">
              <Card className='card' style={{ width: '100%' }}>
                <Card.Img style={{ height: "150px" }} variant="top" src="https://m.media-amazon.com/images/I/81YRBXfMXSL._UF1000,1000_QL80_.jpg" />
                <Card.Body className='d-flex justify-content-between'>
                  <Card.Title><Link className='name' style={{ textDecoration: "none", color: "white" }}>Ashique2  <br /> <span style={{ fontSize: "15px" }}>Mithoon,Ankit Tiwari ,Jeet Gannguli</span></Link></Card.Title>
                  <Button style={{ visibility: "hidden", border: "none" }} className='bg-transparent button '><FontAwesomeIcon icon={faCirclePlay} className="fa-2x text-success" /></Button>
                </Card.Body>
              </Card>
            </div>

            <div className="col-md-3 p-3">
              <Card className='card' style={{ width: '100%' }}>
                <Card.Img style={{ height: "150px" }} variant="top" src="https://images.ottplay.com/images/vaaranam-aayiram-poster-1709023853.jpg?impolicy=ottplay-20210210&width=1200&height=675" />
                <Card.Body className='d-flex justify-content-between'>
                  <Card.Title><Link className='name' style={{ textDecoration: "none", color: "white" }}>V1000<br /> <span style={{ fontSize: "15px" }}>H Jayaraj ,Karthik,S Ghoshal</span></Link></Card.Title>
                  <Button style={{ visibility: "hidden", border: "none" }} className='bg-transparent button '><FontAwesomeIcon icon={faCirclePlay} className="fa-2x text-success" /></Button>
                </Card.Body>
              </Card>
            </div>

            <div className="col-md-3 p-3">
              <Card className='card' style={{ width: '100%' }}>
                <Card.Img style={{ height: "150px" }} variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpWxU-hFnQ3RChs9JZfa9-LNNPCTu6XB2Hvw&s" />
                <Card.Body className='d-flex justify-content-between'>
                  <Card.Title ><Link className='name' style={{ textDecoration: "none", color: "white" }}>Rockstar  <br /> <span style={{ fontSize: "15px" }}>A R Rahman,Irshad Kamil</span></Link></Card.Title>
                  <Button style={{ visibility: "hidden", border: "none" }} className='bg-transparent button ' ><FontAwesomeIcon icon={faCirclePlay} className="fa-2x text-success" /></Button>
                </Card.Body>
              </Card>
            </div>

            <div className="col-md-3 p-3">
              <Card className='card' style={{ width: '100%' }}>
                <Card.Img style={{ height: "150px" }} variant="top" src="https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/3e/ab/82/3eab8268-4a1d-a04b-7336-a3e583cf8b4c/cover.jpg/1200x1200bf-60.jpg" />
                <Card.Body className='d-flex justify-content-between'>
                  <Card.Title><Link className='name' style={{ textDecoration: "none", color: "white" }}>Aavesham  <br /> <span style={{ fontSize: "15px" }}>Sushin Shyam ,Dabzee</span></Link></Card.Title>
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