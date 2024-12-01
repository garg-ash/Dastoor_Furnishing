import React from 'react';
import './Projects.css';
import { GoProjectSymlink } from "react-icons/go";
import { FaHandHolding } from "react-icons/fa";
import { GiTeamIdea } from "react-icons/gi";
import { LiaAwardSolid } from "react-icons/lia";
import work_image from '../Assets/work_image.jpg';

const Projects = () => {
  return (
    <>
      <div className="project-section">
        <h2>About Our Work</h2>
        <div className="work-section">
          {/* Left Section */}
          <div className="project-section-left">
            <div className="project-work">
              <GoProjectSymlink color="white" height={10} width={10} />
              <h2>Projects</h2>
              <p>100</p>
            </div>
            <div className="project-work">
              <GiTeamIdea color="white" height={10} width={10} />
              <h2>Our Team</h2>
              <p>20</p>
            </div>
            <div className="project-work">
              <FaHandHolding color="white" height={10} width={10} />
              <h2>Clients</h2>
              <p>40</p>
            </div>
            <div className="project-work">
              <LiaAwardSolid color="white" height={10} width={10} />
              <h2>Awards</h2>
              <p>76</p>
            </div>
          </div>

          {/* Right Section */}
          {/* <div className="project-section-right">
            <div className="project-image">
              <img src={work_image} alt="Our Work" />
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Projects;
