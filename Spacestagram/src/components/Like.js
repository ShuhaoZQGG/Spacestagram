import React from "react";
//import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart as heartSolid }  from '@fortawesome/free-solid-svg-icons' 
import  { faHeart as heartHollow } from "@fortawesome/free-regular-svg-icons";
function Like(){
  return(
    <div>
    <p>Like</p>
    <i className='fas fa-heart' />
    <FontAwesomeIcon icon = {heartSolid}/>
    <FontAwesomeIcon icon = {heartHollow}/>

    </div>
)
}

export default Like