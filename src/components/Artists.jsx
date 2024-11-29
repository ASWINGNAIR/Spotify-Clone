import React from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';


function Artists() {
  return (
    <>
      <div>
          <div className='d-flex justify-content-between title'  >
            <Link className=' mt-5' style={{ textDecoration: 'none' }}><h5 className='ms-2'>Popular Artist</h5></Link>
            <Link className=' mt-5' style={{ textDecoration: 'none' }}><h6 className='ms-2'>show all</h6></Link>
          </div>
          <div className="container-fluid ">
            <div className="row">

              <div className="col-md-3 p-3">
                <Card className='card' style={{ width: '100%' }}>
                  <Card.Img style={{ height: "150px" }} variant="top" src="https://www.deccanchronicle.com/h-upload/2024/09/06/1838604-untitleddesign-2024-09-06t111158977.webp" />
                  <Card.Body className='d-flex justify-content-between'>
                    <Card.Title><Link className='name' style={{textDecoration:"none",color:"white"}}>H Jayaraj</Link><p style={{fontSize:"15px"}}>Artist</p></Card.Title>
                    <Button style={{visibility:"hidden", border:"none"}}  className='bg-transparent button '><FontAwesomeIcon icon={faCirclePlay} className="fa-2x text-success" /></Button>
                  </Card.Body>
                </Card>
              </div>

              <div className="col-md-3 p-3">
              <Card className='card' style={{ width: '100%' }}>
                  <Card.Img  style={{ height: "150px"}} variant="top"  src="https://images.deccanherald.com/deccanherald%2F2024-11-23%2Fnzknkxlh%2Ffile7xjemob0xzd1co9w5bzb.jpg?auto=format%2Ccompress&fmt=webp&fit=max&format=webp&q=70&w=400&dpr=2" />
                  <Card.Body className='d-flex justify-content-between'>
                    <Card.Title><Link className='name' style={{textDecoration:"none",color:"white"}}>A R Rahman</Link><p style={{fontSize:"15px"}}>Artist</p></Card.Title>
                    <Button style={{visibility:"hidden", border:"none"}}  className='bg-transparent button '><FontAwesomeIcon icon={faCirclePlay} className="fa-2x text-success" /></Button>
                  </Card.Body>
                </Card>
              </div>

              <div className="col-md-3 p-3">
              <Card className='card'style={{ width: '100%' }}>
                  <Card.Img style={{ height: "150px" }} variant="top" src="https://assets.gqindia.com/photos/65390f69d674b9b8c3ecc0dd/16:9/w_2560%2Cc_limit/Anirudh-Ravichander.jpg" />
                  <Card.Body className='d-flex justify-content-between'>
                  <Card.Title ><Link className='name' style={{textDecoration:"none",color:"white"}}>Anirudh</Link><p style={{fontSize:"15px"}}>Artist</p></Card.Title>
                    <Button style={{visibility:"hidden", border:"none"}}  className='bg-transparent button ' ><FontAwesomeIcon icon={faCirclePlay} className="fa-2x text-success" /></Button>
                  </Card.Body>
                </Card>
              </div>

              <div className="col-md-3 p-3">
              <Card className='card' style={{ width: '100%' }}>
                  <Card.Img style={{ height: "150px" }} variant="top" src="https://static.toiimg.com/thumb/msid-76139365,width-400,resizemode-4/76139365.jpg" />
                  <Card.Body className='d-flex justify-content-between'>
                  <Card.Title><Link className='name' style={{textDecoration:"none",color:"white"}}>Vishal,Shekar</Link><p style={{fontSize:"15px"}}>Artist</p></Card.Title>
                    <Button style={{visibility:"hidden", border:"none"}} className='bg-transparent button'><FontAwesomeIcon icon={faCirclePlay} className="fa-2x text-success" /></Button>
                  </Card.Body>
                </Card>
              </div>
              
            </div>
          </div>
      </div>

      <style>
        {`
          .name:hover{
            text-decoration: underline !important;
          }
            .title:hover{
              text-decoration: underline !important;
            }
            .card:hover .button{
              visibility: visible !important;
            }
        `}
      </style>
    </>
  )
}

export default Artists



