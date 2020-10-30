import React from "react"

import PortfolioItem from "./PortfolioItem"

import webagency from "../../images/webAgenc.png"
import webagencyResponsive from "../../images/webAgencyResponsive.png"

const Portfolio = () => {
  return (
    <div className="portfolio">
      <PortfolioItem bgImage={webagency} bgImage2={webagencyResponsive} />

      <div>
        <svg
          className="wave"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#d3b929"
            fill-opacity="1"
            d="M0,96L60,122.7C120,149,240,203,360,224C480,245,600,235,720,197.3C840,160,960,96,1080,74.7C1200,53,1320,75,1380,85.3L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  )
}

export default Portfolio
