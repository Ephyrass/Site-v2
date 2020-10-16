import React from "react"
import ScrollAnimation from "react-animate-on-scroll"
import "animate.css/animate.min.css"

const Skill = ({ img, imgSrc }) => {
  return (
    <div className="skill">
      <ScrollAnimation animateIn="flipInX" animateOut="flipOutX">
        <img src={img} alt={imgSrc} />{" "}
      </ScrollAnimation>{" "}
    </div>
  )
}

export default Skill
