import React, { useState, useEffect } from 'react';
import { Card, Container, Form, FormControl, Button } from 'react-bootstrap';
import './home.css';
  
function Home() {

    const [data, setData] = useState([{}])

    useEffect(() => {
      fetch("/wikiCategories").then(
        res => res.json()
      ).then(
        data => {
          setData(data)
          console.log(data)
        }
      )
    }, [])
    return (
      <Container>
          <div>
          <br />
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder=""
              aria-label="Search"
            />
            <Button variant="secondary">Search</Button>
          </Form>
        </div>
        < br/>
        <Card className="text-center">
          <Card.Body>
            <Card.Text>
              <div className='game-div'>
                  {(typeof data.wikiCategories === 'undefined') ? (
                    <p></p>
                    ) : (
                    data.wikiImages.map((image, i) => (
                    <div className='image-div'>
                      <img src={image} alt="cover"/>
                    </div>
                    ))
                  )}
                  <div className='consoles-div'>
                    {(typeof data.wikiCategories === 'undefined') ? (
                      <p>Loading...</p>
                      ) : (
                      data.wikiTitles.map((title, i) => (
                      <Card.Title>{title}</Card.Title>
                      ))
                    )}
                    {(typeof data.wikiCategories === 'undefined') ? (
                      <p></p>
                      ) : (
                      data.wikiCategories.map((member, i) => (
                      <div className='console-button'>
                        {member}
                      </div>
                      ))
                    )}
                    <br />
                  </div>
              </div>
            </Card.Text>
          </Card.Body>
      </Card>
      </Container>
    );
  }; 
  
  export default Home;