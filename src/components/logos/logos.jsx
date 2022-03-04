import React from 'react';
import {
    Container
} from 'react-bootstrap';
import './logos.css';

// All logo images.
import xbox from '../assets/xbox.png';
import pc from '../assets/pc.png';
import nintendo from '../assets/nintendo.png';
import playstation from '../assets/playstation.png';

function Logos() {
    return (
      <Container>
        <div className="logos">
            <div>
                <a href="https://playstation.com">
                    <img src={playstation} alt='playstation'/>
                </a>
            </div>
            <div>
                <a href="https://xbox.com">
                    <img src={xbox} alt='xbox'/>
                </a>
            </div>
            <div>
                <a href="https://store.steampowered.com">
                    <img src={pc} alt='pc'/>
                </a>
            </div>
            <div>
                <a href="https://nintendo.com">
                    <img src={nintendo} alt='nintendo'/>
                </a>
            </div>
        </div>
      </Container>
    );
  }; 
  
  export default Logos;