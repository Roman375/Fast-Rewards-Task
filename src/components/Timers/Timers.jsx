import React from 'react'
import timer from '../../Vector.svg'
import './Timers.css'

const Timer = () => {
  return (
    <>
      <div className='timer'>
        <span className='title-desktop'>Desktop</span>
        <div className="image-desktop">
          <img src={timer}></img>
        </div>
        <span className='timer-desktop'>00:00:00</span>
      </div>
      <div>
        <span className='title-mobile'>Mobile</span>
        <div className="image-mobile">
          <img src={timer}></img>
        </div>
        <span className='timer-mobile'>00:00:00</span>
      </div>
    </>
  )
}

export default Timer
