import React from "react"

function PortfolioItem({ bgImage, bgImage2 }) {
  return (
    <>
      <div className="portfolio-item">
        <div className="left">
          <figure
            className="image-responsive"
            style={{
              background: `url(${bgImage2})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          ></figure>
        </div>
        <div className="middle">
          <p className="title-portfolio">WebAgency</p>
          <p className="subtitle">Site Vitrine</p>
        </div>
        <div className="right">
          <figure
            className="image-monitor"
            style={{
              background: `url(${bgImage})`,
              backgroundSize: "cover",
            }}
          ></figure>
        </div>
      </div>
    </>
  )
}

export default PortfolioItem
