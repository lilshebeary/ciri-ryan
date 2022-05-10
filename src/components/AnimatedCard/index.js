import React from 'react'
import './AnimatedCard.css';

const AnimatedCard = (props) => {
  return (
    
    <div class="container">
        <div class="box">
            <div class="imgBx">
                <img src={props.image} alt={props.altText} />
            </div>
            <div class="content">
                <h2>Title</h2>
                <p>{props.content}</p>
                <a href={props.link}>Code</a>
            </div>
        </div>
    </div>
  )
}

export default AnimatedCard;