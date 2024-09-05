import React from 'react'

function Card(props) {
    return(
        <>
        <div class="cardDiv">
        <img src={props.imageUrl} id='fuji'/>
        {/* <h3>{props.title}</h3> */}
  
        <p id='title'>{props.title}</p>
        <p id='location'>{props.location}</p>
        {/* <p id='startDate'>{props.startDate}</p>
        <p id='endDate'>{props.endDate}</p> */}
        <p id='description'>{props.description}</p>
        </div>
        </>
    )
}

export default Card;