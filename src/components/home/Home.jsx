import React from 'react';
import {
    Container
} from 'react-bootstrap';
import SearchEngine from '../searchEngine/SearchEngine.jsx';
import Logos from '../logos/Logos.jsx';
import './home.css';

function Home() {
    return (
      <Container>
        <div className='search-engine-main-div'> 
          < SearchEngine />
        </div>
        <div>
          < Logos />
        </div>
      </Container>
    );
  }; 
  
  export default Home;