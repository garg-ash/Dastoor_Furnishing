import React from 'react'
import './Info.css'
import banner_two from '../Assets/banner-two.jpg'

const Info = () => {
  return (
      <>
    <div className="infoheading">
        <h3>Featured Products</h3>
        <div className="first-back-box">
          <div className="second-back-box">
          </div>
          </div>
          <div className='furniture_information'>
        <div className="furniture_information_left">
            <img src={banner_two} alt="" />
        </div>
        <div className="furniture_information_right">
            <h2>Comfort Meets Style: Explore Our Exclusive Sofa Collection</h2>
        </div>
    </div>
    </div>
      </>
  )
}

export default Info
