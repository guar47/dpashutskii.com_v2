import React from "react"
import TwitterIcon from "../../content/assets/icons/twitter-icon.svg"
import YouTubeIcon from "../../content/assets/icons/youtube-icon.svg"

const Social = props => {
  return (
    <div className="">
      <div className="flex justify-left font-headers items-center">
        <span className="font-semibold mr-2">socials:</span>
        <a
          href={`https://twitter.com/guar47`}
          target="_blank"
          rel="noopener noreferrer"
          className="no-underline shadow-none"
        >
          <TwitterIcon
            className="text-gray-800 fill-current hover:text-blue-800"
            width={30}
            height={30}
          />
        </a>

        <a
          href={`https://www.youtube.com/c/DmitriiPashutskii`}
          target="_blank"
          rel="noopener noreferrer"
          className="no-underline shadow-none"
        >
          <YouTubeIcon
            className="text-gray-800 fill-current hover:text-blue-800"
            width={30}
            height={30}
          />
        </a>
      </div>
    </div>
  )
}

export default Social
