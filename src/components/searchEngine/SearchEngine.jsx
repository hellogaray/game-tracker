import React, {               // Importing React
  useEffect,
  useState,
  Component
} from 'react';
import {                       // Importing React-Bootstrap
  Card,
  Button,
  Container,
  Form
} from 'react-bootstrap';

// Importing all CSS Stylesheets.
import './searchEngine.css';  
import ai from '../assets/ai.png';

// Function that creates the Search Bar and Button, it also calls the WikiCategories scraper.
export default class SearchEngine extends Component {
    state = {
        gameRequested: "", // Stores the value of the search inpiut.
        serverURL: "" // Stores the path to be used for the server (i.e., wikiCategories/Pokemon-legends)
    };

    changeState = () => {
        if (this.state.gameRequested === null || this.state.gameRequested === '') { // If the user didn't request anything (left the bar empty) do:
            console.log("No input, alerted user.") // Terminal message (mostly for testing purposes).
            alert("No sarch has been made, please enter a videogame."); // Alerts the user that there is no input.
        } else {
            this.setState({
                serverURL: "/wikiCategories/" + this.state.gameRequested // Store the search input and creates the path to call the server.
            });
        }
    };
    render() {
        return (
        // Container for the search bar and button.
            <Container>
                <div className="engine-main section__padding" id="home">
                    <div className="engine-content">
                        <h1 className="gradient__text">GAME CONSOLE TRACKING</h1>
                        <p>Find if the game you want to play is available in the consoles you own. Simply type the name of the game and click search.</p>
                        <div className="engine-content__input">
                            <Form className="SearchEngine-Form">
                                <Form.Control placeholder="Find Your Game" value={this.state.gameRequested} onChange={e=>
                                this.setState({ gameRequested: e.target.value })}
                                type="text" className='content_input'
                                />
                                <Button  className='button-engine' onClick={this.changeState}>
                                Search
                                </Button>
                            </Form>
                        </div>
                    </div>
                    <div className="search-results">
                        <div className="results-div">
                            <Results info={this.state.serverURL} />
                        </div>
                    </div>
                </div>
            </Container>
          );
        }
}

function Results(props) {
    // Extracts the results from the server after a call has been made by making a search.
    const [data, setData] = useState([{}]) // Stores data from user's input to be sent to the server.
    const [loading, setLoading] = useState(false); //  Stars another request if a new input has been requested.

    useEffect(() => {
        setLoading(true) // If the value has changed then sent another request. 
        fetch(props.info).then(
            res => res.json()
        ).then(
            data => {
                setLoading(false)
                setData(data)
                console.log(data) // Terminal message (mostly for testing purposes).
            }
        )
    }, [props.info])
    return (
    // Container with the results of the serach. When no search has been requested it shows a message that says "Results will appear here."
    <Container className='results-container'>
        < br />
        <Card className='card-results'>
            <Card.Body>
                <Card.Text>
                        {(typeof data.wikiCategories === 'undefined') ? (
                             <div className='image-div'>
                                <img src={ai} alt="cover" />
                            </div>
                        ) : (
                        data.wikiImages.map((image, i) => (
                            <div className='image-div'>
                                <img src={image} alt="cover" />
                            </div>
                        ))
                        )}
                        <br /><br />
                            {(typeof data.wikiCategories === 'undefined') ? (
                                <div className='results-title-div'>
                                    Title
                                </div>
                            ) : (
                            data.wikiTitles.map((title, i) => (
                                <div className='results-title-div'>
                                    {title}
                                </div>
                            ))
                            )}
                            <br />
                            <div className='all-consoles-div'>
                                {(typeof data.wikiCategories === 'undefined') ? (
                                    <div className='console-button'>
                                        Here are the categories
                                    </div>
                                    ) : (
                                    data.wikiCategories.map((categories, i) => (
                                    <div className='console-button'>
                                        {categories}
                                    </div>
                                    ))
                                )}
                            </div>
                </Card.Text>
            </Card.Body>
        </Card>
    </Container>
  )
}