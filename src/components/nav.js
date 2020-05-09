import React from "react"
import { Link } from "gatsby"

const Nav = () => (
  <h3>
    <Link
      to="contact"
      style={{
        color: "blue",
        textDecoration: "none",
        paddingLeft: "5px",
      }}
    >
      Contact Us
    </Link>

    <Link
      to="about"
      style={{
        color: "blue",
        textDecoration: "none",
        paddingLeft: "5px",
      }}
    >
      About Us
    </Link>

    <Link
    to="resources"
    style={{
        color: "blue",
        textDecoration: "none",
        paddingLeft: "5px",
        paddingRight: "0px",
      }}
    >
    Resources
    </Link>
  </h3>
)

export default Nav
