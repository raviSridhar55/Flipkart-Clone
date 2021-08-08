import React from 'react';
import logo from '../Assets/flipkart.svg';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
  return (
    <header>
      <Navbar bg='primary' variant='dark' expand='lg' collapseOnSelect>
        <Container>
          <Navbar.Brand href='#home'>
            <img src={logo} alt='Logo...' />{' '}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ms-auto'>
              <Nav.Link href='/cart'>
                <i className='fas fa-shopping-cart'></i> Cart
              </Nav.Link>
              <Nav.Link href='/login'>
                <i className='fas fa-user'></i> User
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
