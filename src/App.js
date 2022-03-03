import * as React from 'react';   // Importing React
import {                          // Importing React-Bootstrap
	Navbar,
	Nav,
	Container,
} from 'react-bootstrap';
import {                        // Importing React-Router
	BrowserRouter as Router,
	Routes,
	Route,
	Link,
} from "react-router-dom";

// Importing all CSS Stylesheets (including bootstrap).
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// Importing all components (different pages)
import Features from './components/features/Features.jsx'
import Faqs from './components/faqs/Faqs.jsx'
import Home from './components/home/Home.jsx';
import Contact from './components/contact/Contact.jsx';
import Icon from './components/icon/Icon.jsx'


// Main App, it will display the Navigation Bar at the top.
function App() {
  return (
    <Router>
      <Navbar className='navbar gradient__bg' variant="dark" expand="lg">
        <Container fluid>
          <Navbar.Brand href="/"><Icon /> { } gracker </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
            <Nav className="me-auto"></Nav>  
            </Nav>
            <Nav>
              <Link to="/home">HOME</Link>
              <Link to="/features">FEATURES</Link>
              <Link to="/faqs">FAQS</Link>
              <Link to="/contact">CONTACT</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <br /> <br /> <br />
      
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/features' element={<Features/>} /> 
        <Route path='/faqs' element={<Faqs/>} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>
    </Router> 
  );
}


export default App;
