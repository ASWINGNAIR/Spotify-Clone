import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpotify } from '@fortawesome/free-brands-svg-icons';
import { faHouse, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import {  Nav,Button} from "react-bootstrap";


function Header() {
  return (
    <>
       <Navbar expand="md" className="bg-black p-3  fixed-top" variant="dark">
      <Container>
        <Navbar.Brand href="#">
          <FontAwesomeIcon icon={faSpotify} className="fa-2x" style={{ color: "white" }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="border-0">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            <Nav.Link href="#" className="text-white">
              <FontAwesomeIcon icon={faHouse} className="fa-2x" style={{ color: "white" }} />
            </Nav.Link>

              <div className="position-relative ms-3">
                <input
                  type="text"
                  placeholder="What do you want to play?"
                  className="form-control bg-transparent text-white rounded-5 p-3 ps-5"
                  style={{ height: "45px" }}
                />
                <FontAwesomeIcon
                  icon={faMagnifyingGlass}
                  className="position-absolute"
                  style={{
                    top: "50%",
                    left: "15px",
                    transform: "translateY(-50%)",
                    color: "white",
                  }}
                />
              </div>


            
            <Button className="btn bg-transparent rounded-5 ms-md-3 my-2 my-md-0">
              Sign Up
            </Button>
            <Button className="btn bg-white text-black rounded-5 ms-2 my-2 my-md-0">
              Log In
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default Header