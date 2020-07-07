import React from "react"
import { Link } from "gatsby"

import { rhythm } from "../utils/typography"

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const blogPath = `${__PATH_PREFIX__}/blog`
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath || location.pathname === blogPath) {
      header = (
        <h1 className="mb-3 mt-0 text-4xl font-black">
          <Link className="no-underline shadow-none" to={`/`}>
            {title}
          </Link>
        </h1>
      )
    } else {
      header = (
        <div className="mb-3 mt-0 text-4xl font-black">
          <Link className="no-underline shadow-none text-2xl font-headers" to={`/`}>
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
