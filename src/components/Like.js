import React, {useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart }  from '@fortawesome/free-solid-svg-icons' 

function Like(){
  const [color, setColor] = useState('black');
  
  if (color === 'black'){
    return(
      <div> 
      <FontAwesomeIcon  icon = {faHeart} size = '5x' transform = 'shrink-5 right-150' color = {color}  onClick = {() => setColor('red')}/>
      </div>
    )
  }
  else{
    return(
      <div> 
      <FontAwesomeIcon  icon = {faHeart} size = '5x' transform = 'right-150' color = {color} onClick = {() => setColor('black')}/>
      </div>
    )
  }
}

export default Like