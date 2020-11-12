import React from "react"
import { Link } from "gatsby"

import { rhythm } from "../utils/typography"

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const ruPath = `${__PATH_PREFIX__}/ru`
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath || location.pathname === ruPath) {
      header = (
        <h1 className="mt-0 mb-3 text-4xl font-black">
          <Link className="no-underline shadow-none" to={`/`}>
            {title}
          </Link>
        </h1>
      )
    } else {
      header = (
        <div className="mt-0 mb-3 text-4xl font-black">
          <Link className="text-2xl no-underline shadow-none font-headers" to={`/`}>
            {title}
          </Link>
        </div>
      )
    }

    return (
      <React.Fragment>
        <div
          className="mx-auto"
          style={{
            maxWidth: rhythm(24),
            padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
          }}
        >
          <header className="pb-5">{header}</header>
          <main>{children}</main>
          <footer className="mt-20">
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </footer>
        </div>
      </React.Fragment>
    )
  }
}

export default Layout
