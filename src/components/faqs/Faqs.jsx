import React from 'react';
import { Accordion, Container } from 'react-bootstrap';
import './faqs.css';

function FrequentQuestions(accordion) {
    return(
        <Container>
            <Accordion>
                <Accordion.Item>
                    <Accordion.Header>{accordion.question}</Accordion.Header>
                    <Accordion.Body>
                    {accordion.answer}
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </Container>
    ); 
  }; 
  
  
  function Faqs() {
    return (
      <Container>
        <div><h1 className='center-title'>FAQs</h1></div>
        <div>
            <h4 className='center-title'>Frequently Asked Questions</h4>
            <br />
            <FrequentQuestions 
                question="WHAT SHOULD I DO IF A PAGE IS NOT LOADING OR WORKING PROPERLY"
                answer="If the page did not load you can try refreshing the page. If you still have issues you can contact us at help@gametracker.co"
            />
            < br />
            <FrequentQuestions 
                question="HOW DO I SEARCH FOR A VIDEO GAME AND DO I NEED THE EXACT NAME"
                answer="You can simply use the search bar and add the name of the game you want to see."
            />
            < br />
            <FrequentQuestions 
                question="WHAT TO DO IF THE INFORMATION IS INCORRECT"
                answer="If the game results do not match the game, please report it to thankyou@gametracker.co"
            />
            < br />
            <FrequentQuestions 
                question="HOW CAN I SEE ALL NEW AND OLD FEATURES CURRENTLY AVAILABLE"
                answer="Visit our Features page where we will upload any new feature added to the site."
            />
            < br />
            <FrequentQuestions 
                question="WHAT TO DO IF THE CONTACT FORM IS NOT WORKING"
                answer="If the page did not load you can try refreshing the page. If you still have issues you can contact us directly by sending an email to help@gametracker.co"
            />
            < br />
            <FrequentQuestions 
                question="WHAT DO YOU USE TO GET ALL THE INFORMATION PROVIED ON THIS WEBSITE"
                answer="All data is pulled from Wikipedia.com"
            />
            < br />

        </div>
      </Container>
    );
  }; 
  
  export default Faqs;