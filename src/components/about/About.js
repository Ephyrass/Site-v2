import React from "react"
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
    </div>
  )
}

export default About
