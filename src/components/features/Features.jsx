import React from 'react';
import { Row, Col, Toast, Container } from 'react-bootstrap';
import './features.css';
  
function FeaturesAccordion(features) {
  return(
      <Container>
        <Toast>
          <Toast.Header>    
           <strong className="me-auto">{features.title}</strong>
           <small>Added: {features.date}</small>
          </Toast.Header>
          <Toast.Body>
            <Row>
              <Col className='description'>
                {features.description}
              </Col>
              <Col>
                {features.video} 
              </Col>
            </Row>
          </Toast.Body>
        </Toast>

      </Container>
  ); 
}; 


function Features() {
  return (
    <Container>
      <div><h1 className='center-title'>Features</h1></div>
      <div>
          <h4 className='center-title'>Latest and Current Features</h4>
          <br />
          <FeaturesAccordion 
              title="SEARCH FOR A GAME"
              date="22-01-10"
              description="Nunc molestie risus vitae eros ultrices sagittis. Fusce vel velit at felis efficitur dignissim sed quis metus. Phasellus elementum vestibulum viverra. Vivamus id sapien est. Quisque at accumsan nisi. Quisque placerat commodo nunc et lobortis. Donec nulla dolor, tincidunt at quam tincidunt, porttitor vestibulum ligula. Pellentesque lacinia, felis in lacinia ultricies, lacus ipsum pretium nulla, nec laoreet velit quam at elit. Mauris leo libero, viverra non est ornare, tempus imperdiet felis."
              video=<iframe width="100%" height="350" src="https://www.youtube.com/embed/BoZ0Zwab6Oc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>   
          />
          < br />
          <FeaturesAccordion 
              title="GET YOUR QUESTIONS ANSWERED"
              date="22-01-10"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non dignissim lectus. Donec consectetur pulvinar magna at aliquet. Etiam id tellus ipsum. Vestibulum eget felis justo. Morbi gravida sit amet dui sed aliquam. Nulla varius quam metus, vitae hendrerit ligula consequat a. Sed quis risus auctor, semper elit at, scelerisque libero."
              video=<iframe width="100%" height="350" src="https://www.youtube.com/embed/BoZ0Zwab6Oc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>   
          />
          < br />
      </div>
    </Container>
  );
}; 
  export default Features;