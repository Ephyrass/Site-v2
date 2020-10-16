import React from "react"
import ScrollAnimation from "react-animate-on-scroll"
import "animate.css/animate.min.css"

import me from "../../images/me.jpg"
import Store from "../../images/Store.svg"
import Desk from "../../images/Desk.svg"

const About = () => {
  return (
    <div className="about">
      <h2 className="about-title">À PROPOS</h2>
      <hr
        style={{
          width: "15%",
          position: "relative",
          top: "-25px",
          height: "3px",
          border: "none",
        }}
      />
      <div className="about-container">
        <div className="desk_svg">
          <img src={Desk} />
        </div>
        <div className="me">
          <p>
            Nous intervenons auprès de start-up, PME, Grandes entreprises,
            artisans, restaurateurs,commerçants ou encore particuliers pour leur
            créer des applications et des sites internet afin de les accompagner
            dans leurs objectifs.
          </p>
        </div>
      </div>
      <div className="about-container store">
        <div className="me">
          <p>
            {" "}
            Nous intervenons auprès de start-up, PME, Grandes entreprises,
            artisans, restaurateurs,commerçants ou encore particuliers pour leur
            créer des applications et des sites internet afin de les accompagner
            dans leurs objectifs.
          </p>
        </div>
        <div className="store_svg">
          <img src={Store} />
        </div>
      </div>
      <svg
        className="wave"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#f67062"
          fill-opacity="1"
          d="M0,96L60,122.7C120,149,240,203,360,224C480,245,600,235,720,197.3C840,160,960,96,1080,74.7C1200,53,1320,75,1380,85.3L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        ></path>
      </svg>
    </div>
  )
}

export default About
