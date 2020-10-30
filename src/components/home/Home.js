import React from "react"
import Header from "./Header"
import arrow from "../../images/arrow.svg"
import { Link, animateScroll as scroll } from "react-scroll"
import ReactTypingEffect from "react-typing-effect"

const Home = () => {
  return (
    <div className="home">
      <Header />
      <div className="title">
        <h1>
          Création et refonte{" "}
          <span className="typing">
            <ReactTypingEffect
              text={[
                "de sites vitrines.",
                "d'applications.",
                "de sites E-commerces",
              ]}
              speed={70}
              eraseSpeed={70}
              eraseDelay={3500}
              typingDelay={1500}
            />
          </span>
          <br />
        </h1>
        <p className="title-para">
          Nous accompagnons nos clients dans la création de site et
          d'application web de l'étude jusqu'au référencement.
        </p>
        <div className="button">
          <Link to="about" spy={true} smooth={true} duration={1000}>
            <button>
              En savoir plus
              <span className="arrow">
                <img src={arrow} alt="flèche vers le bas" />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home
