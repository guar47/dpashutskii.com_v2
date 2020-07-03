import React from "react"
import TwitterIcon from "../../content/assets/icons/twitter-icon.svg"
import LinkedinIcon from "../../content/assets/icons/linkedin-icon.svg"
import GithubIcon from "../../content/assets/icons/github-icon.svg"

const Social = () => {
  return (
    <div className="flex justify-center">
      <div className="flex max-w-xs w-2/4 sm:w-2/5 justify-between">
        <a
          href={`https://twitter.com/guar47`}
          target="_blank"
          rel="noopener noreferrer"
          className="no-underline shadow-none"
        >
          <TwitterIcon
            className="fill-current text-gray-800 hover:text-blue"
            width={50}
            height={50}
          />
        </a>
        <a
          href={`https://www.linkedin.com/in/dmitrii-pashutskii/`}
          target="_blank"
          rel="noopener noreferrer"
          className="no-underline shadow-none"
        >
          <LinkedinIcon
            className="fill-current text-gray-800 hover:text-blue"
            width={50}
            height={50}
          />
        </a>
        <a
          href={`https://github.com/guar47`}
          target="_blank"
          rel="noopener noreferrer"
          className="no-underline shadow-none"
        >
          <GithubIcon
            className="fill-current text-gray-800 hover:text-blue"
            width={50}
            height={50}
          />
        </a>
      </div>
    </div>
  )
}

export default Social
