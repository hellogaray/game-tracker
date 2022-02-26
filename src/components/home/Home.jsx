import React from 'react';
import { Container } from 'react-bootstrap';
import SearchEngine from '../searchEngine/SearchEngine.jsx';
import './home.css';


  
function Home() {

    return (
      <Container>
                  < SearchEngine />
      </Container>
    );
  }; 
  
  export default Home;