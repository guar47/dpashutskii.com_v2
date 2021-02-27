import React from "react"
import { Link } from "gatsby"
import RussiaFlagIcon from "../../content/assets/icons/russia-icon.svg"
import USFlagIcon from "../../content/assets/icons/us-icon.svg"
class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const ruPath = `${__PATH_PREFIX__}/ru/`
    let header

    if (location.pathname === ruPath) {
      header = (
        <div className="flex items-center justify-between">
          <h1 className="block my-0 text-4xl font-black">
            <Link
              className="no-underline shadow-none text-gray-800 hover:text-blue-800"
              to={`/ru/`}
            >
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
        <div className="flex items-center justify-between">
          <h1 className="block my-0 text-2xl font-black">
            <Link
              className="no-underline shadow-none text-gray-800 hover:text-blue-800"
              to={`/`}
            >
              {title}
            </Link>
          </h1>
          <div className="hidden items-center sm:flex">
            <Link
              className="no-underline font-semibold shadow-none text-gray-800 hover:text-blue-800 mr-5"
              to={`/blog`}
            >
              Blog
            </Link>
            <Link
              className="no-underline font-semibold shadow-none text-gray-800 hover:text-blue-800 mr-20"
              to={`/projects`}
            >
              Projects
            </Link>
            <a
              href={`${__PATH_PREFIX__}/ru/`}
              className="flex items-center justify-center no-underline shadow-none"
            >
              <RussiaFlagIcon width={30} height={30} />
            </a>
          </div>
        </div>
      )
    }

    return (
      <React.Fragment>
        <div className="p-4">
          <header className="pb-5 sm:px-10">{header}</header>
          <main className="max-w-3xl mx-auto">{children}</main>
          <footer className="mt-20 max-w-3xl mx-auto text-center">
            © {new Date().getFullYear()}, Built with ❤️ somewhere in the world
            🌏
          </footer>
        </div>
      </React.Fragment>
    )
  }
}

export default Layout
