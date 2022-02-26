import { 
	Container,
} from 'react-bootstrap';
import React, {               // Importing React
  useEffect,
  useState
} from 'react';
import './icon.css';

function Icon() {
  
  const [imageData, setImageData] = useState([{}])
  const [isLoading, setIsLoading] = useState(true); // <-- loading state

  

  useEffect (() => {
    setIsLoading(true); // <-- ensure loading true
    fetch("/getImage").then(
      res => res.json()
    ).then(
      imageData => {
        setImageData(imageData)
        console.log("Requested this imageData from microservice: ", imageData)
      }
    ).finally(() => setIsLoading(false));
  }, [])


  if (isLoading) return <div>Loading Data</div>; // <-- render loading UI
  return (
    <div className="icon-div">
      {(
        <img src={ imageData.resultsImage} className="icon-logo"/>
      )}
    </div>
  );
}


export default Icon;