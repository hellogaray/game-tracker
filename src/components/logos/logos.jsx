import React from 'react';
import { Container } from 'react-bootstrap';
import './logos.css';


  
function Home() {

    return (
      <Container>
        <div className="logos">
            <div>
                <img src={google} />
            </div>
            <div>
                <img src={slack} />
            </div>
            <div>
                <img src={atlassian} />
            </div>
            <div>
                <img src={dropbox} />
            </div>
            <div>
                <img src={shopify} />
            </div>
        </div>
      </Container>
    );
  }; 
  
  export default Home;