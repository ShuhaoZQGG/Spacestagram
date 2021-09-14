import React, {useState, useEffect} from "react"
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';

function HandleAPI(){
    const key = 'mNDDUPC12NDZcw5tt3OMr4cNmDNrbGi5SrD5x1zn';
    const url = `https://api.nasa.gov/planetary/apod?api_key=${key}&count=1`;
    const [image, setImage] = useState(null);

    let content = null;

    useEffect(() =>{
      axios.get(url)
          .then(response => {
          setImage(response.data)
      })
    }, [url]);
    
    if (image){
      content = <div className = 'search'>
      <input />
      <button id = 'search' className="btn btn-primary">Search</button>
      <h1>
      {image.title}
      </h1>
      <div>
        <img
        src = {image[0].url}
        alt = 'Loading'
        />
      </div>
      <span>{image[0].explanation}</span>
      </div>
    }
    return (
      <div> 
        {content}
      </div>
    )
}

export default HandleAPI