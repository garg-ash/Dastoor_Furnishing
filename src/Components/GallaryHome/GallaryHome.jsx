
import React from "react";
// import imageData from "./Utils/imageData.js"; 
import imageData from "../../Utils/imageData";
import "./GallaryHome.css";
import { IoIosArrowDropright } from "react-icons/io";

const GallaryHome = () => {
  // Select the first 4 images for the Home Page
  const homeGalleryImages = imageData.slice(0, 4);

  return (
    <div className="gallary">
      <div className="home-gallery">
        <h2>Featured Gallery</h2>
        <div className="gallery-grid">
          {homeGalleryImages.map((image) => (
            <div key={image.id} className="gallery-item">
              <img src={image.src}  className="gallery-img" />
              <h5>{image.alt}</h5>
              <p><IoIosArrowDropright /></p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GallaryHome;
