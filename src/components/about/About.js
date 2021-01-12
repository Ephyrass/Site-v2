import React from "react"
import ScrollAnimation from "react-animate-on-scroll"
import "animate.css/animate.min.css"
import Code from "../../images/code.svg"
import Hand from "../../images/Hand.svg"
import Biz from "../../images/Biz.svg"

const About = () => {
  return (
    <div className="about">
      <h2 className="about-title">Donnez du pouvoir à votre projet</h2>
      <p className="about-subtitle">
        Nous vous accompagnons dans la création, la refonte ou l’amélioration de
        votre présence sur le web
      </p>
      <div className="about-para">
        <ScrollAnimation
          delay={300}
          animateIn="fadeInLeft"
          duration="0.5"
          animateOnce={true}
        >
          <div>
            <img src={Code} alt="icone Code" />
            <p style={{ paddingBottom: "1em" }}>
              <strong>Développement web & mobile</strong>
            </p>
            <p>
              Développez un site web avec les meilleurs CMS et frameworks du
              marché grâce à notre agence web. Nous proposons les dernières
              technologies, avec une ergonomie optimale quel que soit le
              support.
            </p>
          </div>
        </ScrollAnimation>
        <ScrollAnimation
          delay={600}
          animateIn="fadeInLeft"
          duration="0.5"
          animateOnce={true}
        >
          <div>
            <img src={Hand} alt="icone Code" />
            <p style={{ paddingBottom: "1em" }}>
              <strong>Accompagnement digitale</strong>
            </p>
            <p>
              Optimiser votre stratégie digitale avec notre étude des besoins,
              recherche, réflexion, analyse et cahier des charges, nom de
              domaine et hébergement, recommandations et plan de stratégie
              digitale.
            </p>
          </div>
        </ScrollAnimation>
        <ScrollAnimation
          delay={900}
          animateIn="fadeInLeft"
          duration="0.5"
          animateOnce={true}
        >
          <div>
            <img src={Biz} alt="icone Code" />
            <p style={{ paddingBottom: "1em" }}>
              <strong>Marketing web</strong>
            </p>
            <p>
              Augmenter votre visibilité grâce au bon positionnement de votre
              site web sur google. Une optimisation du code, des contenus et du
              netlinking contribue à un bon référencement SEO.
            </p>
          </div>
        </ScrollAnimation>
      </div>
    </div>
  )
}

export default About
