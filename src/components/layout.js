import React from "react"
import { Link } from "gatsby"

import { rhythm, scale } from "../utils/typography"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  let header

  if (location.pathname === rootPath) {
    header = (
      <h1
        style={{
          fontFamily:"'Noto Serif JP', sans-serif",
          fontWeight: "bold",
          ...scale(1.5),
          marginBottom: rhythm(1.5),
          marginTop: 0,
          color: `white`
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h1>
    )
  } else {
    header = (
      <h3
        style={{
          fontFamily: "'Noto Serif JP', sans-serif",
          fontWeight: "bold",
          marginTop: 0,
          color: `white`
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h3>
    )
  }
  return (
    <div
      style={{
        margin: `0`,
        height: rhythm(11.8),
        width: `100%`,
        background: "linear-gradient(147.71deg, #168CA6 17.12%, #20E8C4 90.62%)",
        color: `white`
      }}
    >
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(30),
        padding: `${rhythm(1)} ${rhythm(3 / 4)}`,
      }}
    >
      <header>{header}</header>
      <main>{children}</main>
      <footer
          style={{
            marginTop: rhythm(1 / 2),
            position: `relative`,
            bottom: `0`,
            fontFamily: "'Noto Serif JP', sans-serif",
            fontWeight: "normal",
            color: `#272727`
          }}
      >
        © 2020 <a href="https://www.understandcovid.org/" style= {{color: `#272727` }}>Coronavirus Visualization Team</a>
      </footer>
    </div>
    </div>
  )
}

export default Layout
