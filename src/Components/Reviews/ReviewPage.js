import React from 'react'
import "./ReviewPage.css"

function ReviewPage(props) {
  return (
    <div className='reviewpage-container'>
        <img className='review-image' src={props.image} alt='Companies review'/>
        <div className='review-content'>
            <h3>{props.name}</h3>
            <p>{props.reviewWriteup}</p>
        </div>
    </div>
  )
}

export default ReviewPage