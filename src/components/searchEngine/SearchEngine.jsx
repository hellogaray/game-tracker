import React, { useEffect, useState, Component } from 'react';
import { Card, Button, Container, Form } from 'react-bootstrap';
import './searchEngine.css';

export default class SearchEngine extends Component {
  state = {
    val: "",
    info: ""
  };

  changeState = () => {  
    if (this.state.val === null || this.state.val === '') {
    this.setState({info:"/wikiCategories/Pokemon-legends"}); 
 }
  else {
    this.setState({info:"/wikiCategories/" + this.state.val}); 
  }
  };
  render() {
    return (
      <Container>
        <div> 
        <Form className="d-flex">

          <Form.Control
            rows="3"
            placeholder=" Find Your Game "
            value={this.state.val}
            onChange={e => this.setState({ val: e.target.value })}
            type="text"
          />
          <Button
            variant="secondary"
            className="btnFormSend"
            onClick={this.changeState}
          >
            Search
          </Button>
          </Form>  
          
          <div className="main-cointainer">
          <Results info={this.state.info} />  
            </div>   
      </div>
      </Container>

    );
  }
}




function Results(props) {

  const [data, setData] = useState([{}])
      const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    fetch(props.info).then(
      res => res.json()
    ).then(
      data => {
        setLoading(false)
        setData(data)
        console.log(data)
      }
    )
  }, [props.info])
  return (
    <Container>
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
                      <p>Results will appear here.</p>
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
  )
}