import React from 'react'
import './Info.css'
import banner_two from '../Assets/banner-two.jpg'

const Info = () => {
  return (
      <>
    <div className="infoheading">
        <h3>Featured Products</h3>
        <div className='furniture_information'>
        <div className="furniture_information_left">
            <img src={banner_two} alt="" />
        </div>
        <div className="furniture_information_right">
            <h2>Comfort Meets Style: Explore Our Exclusive Sofa Collection</h2>
            {/* <p>Welcome to Dastoor LifeStyle Furniture, where we bring comfort, style, and functionality to every space you cherish. Whether you're furnishing your home, office, or shop, we offer a wide range of furniture designed to meet your unique needs. For your home, explore cozy sofas, elegant dining sets, and spacious wardrobes that blend aesthetics with utility. For offices, we provide ergonomic chairs, versatile desks, and storage solutions to enhance productivity and comfort. If you're outfitting a shop, discover durable display units, counters, and shelving crafted to showcase your products effectively.</p> */}
        </div>
    </div>
    <div className="furniture-informaion-second">
      <div className="furniture-information-left">
        <img src="" alt="" />
      </div>
      <div className="furniture-information-right">
        
      </div>
    </div>
    </div>
      </>
  )
}

export default Info