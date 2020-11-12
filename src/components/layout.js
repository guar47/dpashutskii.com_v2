import React from "react"
import { Link } from "gatsby"
import RussiaFlagIcon from "../../content/assets/icons/russia-icon.svg"
import USFlagIcon from "../../content/assets/icons/us-icon.svg"

import { rhythm } from "../utils/typography"

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const ruPath = `${__PATH_PREFIX__}/ru/`
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <div className="flex items-center justify-between">
          <h1 className="block my-0 text-4xl font-black">
            <Link className="no-underline shadow-none" to={`/`}>
              {title}
            </Link>
          </h1>
          <a
            href={`${__PATH_PREFIX__}/ru/`}
            className="flex items-center justify-center no-underline shadow-none"
          >
            <RussiaFlagIcon width={30} height={30} />
          </a>
        </div>
      )
    } else if (location.pathname === ruPath) {
      header = (
        <div className="flex items-center justify-between">
          <h1 className="block my-0 text-4xl font-black">
            <Link className="no-underline shadow-none" to={`/ru/`}>
              {title}
            </Link>
          </h1>
          <a
            href={`${__PATH_PREFIX__}/`}
            className="flex items-center justify-center no-underline shadow-none"
          >
            <USFlagIcon width={30} height={30} />
          </a>
        </div>
      )
    } else {
      header = (
        <div className="mt-0 mb-3 text-4xl font-black">
          <Link
            className="text-2xl no-underline shadow-none font-headers"
            to={this.props.lang === "en" ? `/` : `/ru/`}
          >
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
