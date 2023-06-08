import React from 'react'
import './Header.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from 'react-router-dom';
import { logout, userData } from '../../pages/UserSlice';
import { useDispatch, useSelector } from 'react-redux';

export const Header = () => {
    const navigate= useNavigate()
    const dataUSerRdx=useSelector(userData)
 
    const dispatch=useDispatch()

    const logMeOut = () => {
      dispatch(logout({ credentials: {}}));
      setTimeout(()=>{
        navigate("/");
      },500)
    }


    return(
      <div>
        {!dataUSerRdx?.credentials?.token ?(<div> <Navbar className='color' collapseOnSelect expand="lg" >
          <Container className='color'>
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link  onClick={()=>navigate('/home')}>Home</Nav.Link>
              </Nav>
              <Nav>
                <Nav.Link  onClick={()=>navigate('/login')}>Login</Nav.Link>
                <Nav.Link eventKey={2}  onClick={()=>navigate('/register')}>
                  Register
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar></div>):(<Navbar className='color' collapseOnSelect expand="lg" >
          <Container className='color'>
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link  onClick={()=>navigate('/home')}>Home</Nav.Link>
              </Nav>
              <Nav>
                <Nav.Link eventKey={2}  onClick={()=>{logMeOut();navigate('/')}}>
                  logout
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>)
        
}
        </div>
      );
    }
