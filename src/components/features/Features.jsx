import React from 'react';
import {
    Row,
    Col,
    Toast,
    Container
} from 'react-bootstrap';
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
      <div className='faqs-header'>
        <h1 className="gradient__text center-title">FEATURES</h1>
        <h4 className='gradient__text center-title'>Latest and Current Features</h4>
      </div>
      <div>
          <br />
          <FeaturesAccordion 
              title="GAME SEARCH"
              date="22-01-10"
              description="Finding a game is easy. It only requires 2 steps: Type the game you want on the search bar and Click Search. That's it! That's all you need to do. The search engine will then scrape information from the internet to get the game cover, the complete title of the name, and the consoles where the game is available. You can use multiple forms of a name and still get the results. For example: For the game 'Pokemon Legends: Arceus' you can use the name 'Pokemon Legends' or 'Pokemon Arceus' and will get you the same information."
              video=<iframe width="560" height="315" src="https://www.youtube.com/embed/GvbbOZApiWY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> 
          />
          < br />
          <FeaturesAccordion
              title="CONTACT US"
              date="22-01-10"
              description="If you are having an issue with either the search engine or any other page on our website you can contact us by using the Contact form on the Contact page or you can send us an email to admin@localhost:300. We will either never answer because this whole page does not work and it is only a small project, or we will and that will be something, right? How did we even do that?! Do not ask me because I also do not know, you should probably change your passwords if that happens, because it is obviously not us."
              video=<iframe width="560" height="315" src="https://www.youtube.com/embed/Sl5od_jMxDI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          />
          < br />
      </div>
    </Container>
  );
}; 
  export default Features;