import React from 'react';
import { Container } from 'react-bootstrap';
import './message.css';
  
function Message() {
  return(
    <Container>
        <div className='message-div'>
          <h1>Your Message has been received!</h1>
        </div>
    </Container>
  );
}; 
  export default Message;