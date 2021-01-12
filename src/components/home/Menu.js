import React from "react"
import { useState } from "react"
import { Link } from "react-scroll"

const Menu = () => {
  const [active, setActive] = useState(false)
  const [menuBurger, setMenuBurger] = useState("menu-burger")
  const [nav, setNav] = useState("")

  const setMenu = () => {
    if (!active) {
      setActive(true)
      setNav("nav-active")
      setMenuBurger("")
    } else if (active) {
      setActive(false)
      setNav("nav-off")
      setMenuBurger("menu-burger-off")
    }
  }

  return (
    <div>
      <h2 className="logo">Cygnus</h2>
      <div
        className={menuBurger}
        id={active ? "is-active" : ""}
        onClick={() => setMenu()}
      >
        <span className="line-burger"> </span>{" "}
      </div>
      <div className={nav}>
        <div
          style={
            nav === "nav-active"
              ? {
                  display: "block",
                  position: "relative",
                  top: "20%",
                  left: "7%",
                }
              : {
                  display: "none",
                }
          }
        >
          <Link to="home" spy={true} smooth={true} duration={1000}>
            <p> Home </p>
          </Link>
          <Link to="about" spy={true} smooth={true} duration={1000}>
            <p> À propos </p>
          </Link>
          <Link to="portfolio" spy={true} smooth={true} duration={1000}>
            <p> Nos projets </p>
          </Link>

          <Link to="contact" spy={true} smooth={true} duration={1000}>
            <p> Contact </p>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Menu
