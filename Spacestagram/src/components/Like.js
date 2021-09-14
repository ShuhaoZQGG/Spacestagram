import React from "react";
//import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart} from '@fortawesome/free-solid-svg-icons'

function Like(){
  return(
    <div>
    <p>Like</p>
    <i className='fas fa-heart' />
    <FontAwesomeIcon icon = {faHeart}/>
    <i class="far fa-heart"></i>
    </div>
)
}

export default Like