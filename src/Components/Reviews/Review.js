import React from 'react'
import reviewData from './reviewData'
import ReviewPage from './ReviewPage'
import "./Review.css"


function Review() {
  const getReview = reviewData.map(function(review){
    return<ReviewPage
    key={review.Id}
    {...review}
    />
  })
  return (
    <div>
      <div className='review-container'>
      {getReview}
      </div>
      
    </div>
  )
}

export default Review