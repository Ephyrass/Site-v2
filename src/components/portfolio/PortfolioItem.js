import React from "react"

function PortfolioItem({ item }) {
  return (
    <>
      <div className="portfolio-item">
        <div className={item.way === 0 ? "pair-left" : "pair-right"}>
          <figure
            className="image-responsive"
            style={
              item.way === 0
                ? {
                    background: `url(${item.image2})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                  }
                : {
                    background: `url(${item.image1})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                  }
            }
          ></figure>
        </div>
        <div className="middle">
          <p className="title-portfolio">{item.title}</p>
          <p className="subtitle">{item.subTitle}</p>
        </div>
        <div className={item.way === 0 ? "pair-right" : "pair-left"}>
          <figure
            className="image-monitor"
            style={
              item.way === 0
                ? {
                    background: `url(${item.image1})`,
                    backgroundSize: "cover",
                  }
                : {
                    background: `url(${item.image2})`,
                    backgroundSize: "cover",
                  }
            }
          ></figure>
        </div>
      </div>
    </>
  )
}

export default PortfolioItem
