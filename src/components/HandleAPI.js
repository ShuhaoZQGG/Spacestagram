import React, {useState, useEffect} from "react"
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';

function HandleAPI(){
    const key = 'mNDDUPC12NDZcw5tt3OMr4cNmDNrbGi5SrD5x1zn';
    let url = `https://api.nasa.gov/planetary/apod?api_key=${key}&count=1`;
    let [image, setImage] = useState(null);
    let content = null;
    /*
    let str = "";
    let element = document.getElementById('dateInput');
    if (element != null) {
        str = element.value;
    }
    else {
        str = null;
    }
    */
    useEffect(() =>{
      axios.get(url)
          .then(response => {
          setImage(response.data)
      })
    }, [url ]);
    
    if (image){
      content = <div className = 'search'>
      <input type = "text" id ='dateInput' placeholder = "Search date yyyy-mm-dd" />
      <button id = 'search' className="btn btn-primary">Search</button>
      <h3 className = 'date'>{image[0].title}</h3>
      <h3 className = 'date'>Space Photo on {image[0].date}</h3>
      <h5>@Copyright: {image[0].copyright}</h5>
      <div>
        <img
        src = {image[0].url}
        alt = 'Loading'
        />
      </div>
      <div className = 'description'>
      <p className = 'description-text'>{image[0].explanation}</p>
      </div>
      </div>
    }
    return (
      <div> 
        {content}
      </div>
    )
}

export default HandleAPI