import React from "react"
import TwitterIcon from "../../content/assets/icons/twitter-icon.svg"
import LinkedinIcon from "../../content/assets/icons/linkedin-icon.svg"
import GithubIcon from "../../content/assets/icons/github-icon.svg"

const Social = () => {
  return (
    <div className="flex justify-center">
      <div className="flex justify-between w-2/4 max-w-xs sm:w-2/5">
        <a
          href={`https://twitter.com/guar47`}
          target="_blank"
          rel="noopener noreferrer"
          className="no-underline shadow-none"
        >
          <TwitterIcon
            className="text-gray-800 fill-current hover:text-blue"
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
            className="text-gray-800 fill-current hover:text-blue"
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
            className="text-gray-800 fill-current hover:text-blue"
            width={50}
            height={50}
          />
        </a>
      </div>
    </div>
  )
}

export default Social
