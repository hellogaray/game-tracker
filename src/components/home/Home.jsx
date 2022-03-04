import React from 'react';
import { Container } from 'react-bootstrap';
import SearchEngine from '../searchEngine/SearchEngine.jsx';
import './home.css';


  
function Home() {

    return (
      <Container>
                 <div className='search-engine-main-div'> 
                   < SearchEngine />
                  </div>
      </Container>
    );
  }; 
  
  export default Home;