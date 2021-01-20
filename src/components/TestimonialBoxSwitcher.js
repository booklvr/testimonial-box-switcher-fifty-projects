import React, { useState, useEffect } from 'react'
import testimonials from '../data/testimonials'

const TestimonialBoxSwitcher = () => {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      if (index < testimonials.length - 1) {
        setIndex(index + 1)
      } else {
        setIndex(0)
      }
    }, 10000)

    return () => clearInterval(interval)
  }, [index])

  return (
    <div className='testimonial-container'>
      <div className='progress-bar'></div>
      <div className='fas fa-quote-right fa-quote'></div>
      <div className='fas fa-quote-left fa-quote'></div>
      <p className='testimonial'>{testimonials[index].text}</p>
      <div className='user'>
        <img
          src={testimonials[index].photo}
          alt={testimonials[index].name}
          className='user-image'
        />
        <div className='user-details'>
          <h4 className='username'>{testimonials[index].name}</h4>
          <p className='role'>{testimonials[index].position}</p>
        </div>
      </div>
    </div>
  )
}

export default TestimonialBoxSwitcher
