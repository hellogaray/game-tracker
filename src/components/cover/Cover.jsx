import {

} from 'react-bootstrap';
import React, { // Importing React
    useEffect,
    useState
} from 'react';
import './cover.css';

function Cover() {
  const [imageData, setImageData] = useState([{}])
  const [isLoading, setIsLoading] = useState(true); // <-- loading states

  useEffect(() => {
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
    <div className="cover-div">
      {(
        <img src={ imageData.resultsImage } alt="results" className="cover-logo"/>
      )}
    </div>
  );
}


export default Cover;
