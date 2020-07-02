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
        height: `48vh`,
        width: `100%`,
        backgroundColor: `#1affc6`,
        color: `#5A5A5A`
      }}
    >
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(24),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
      }}
    >
      <header>{header}</header>
      <main>{children}</main>
      <footer
          style={{
            marginTop: `2vh`,
            position: `absolute`,
            bottom: `0`,
            marginBottom: `3vh`,
            fontFamily: "'Noto Serif JP', sans-serif",
            fontWeight: "normal",
          }}
      >
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org" style= {{color: `#5A5A5A` }}>Gatsby</a>
      </footer>
    </div>
    </div>
  )
}

export default Layout
