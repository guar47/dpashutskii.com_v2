import React from "react"
import TwitterIcon from "../../content/assets/icons/twitter-icon.svg"
import LinkedinIcon from "../../content/assets/icons/linkedin-icon.svg"
import GithubIcon from "../../content/assets/icons/github-icon.svg"
import CoffeeIcon from "../../content/assets/icons/buymeacoffee-icon.svg"
import TelegramIcon from "../../content/assets/icons/telegram-icon.svg"
import InstagramIcon from "../../content/assets/icons/instagram-icon.svg"
import YouTubeIcon from "../../content/assets/icons/youtube-icon.svg"

const Social = props => {
  return (
    <div>
      <div className="flex justify-center">
        <div className="flex justify-between">
          <a
            href={`https://twitter.com/guar47`}
            target="_blank"
            rel="noopener noreferrer"
            className="no-underline shadow-none"
          >
            <TwitterIcon
              className="text-gray-800 fill-current hover:text-blue-800"
              width={50}
              height={50}
            />
          </a>
          <a
            href={
              props.lang === "ru"
                ? `https://instagram.com/another_wayout`
                : `https://instagram.com/dnjourney`
            }
            target="_blank"
            rel="noopener noreferrer"
            className="no-underline shadow-none"
          >
            <InstagramIcon
              className="text-gray-800 fill-current hover:text-blue-800"
              width={50}
              height={50}
            />
          </a>
          <a
            href={`https://www.youtube.com/channel/UCqgoEzNIMYpCQNEGxawx_6w`}
            target="_blank"
            rel="noopener noreferrer"
            className="no-underline shadow-none"
          >
            <YouTubeIcon
              className="text-gray-800 fill-current hover:text-blue-800"
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
              className="text-gray-800 fill-current hover:text-blue-800"
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
              className="text-gray-800 fill-current hover:text-blue-800"
              width={50}
              height={50}
            />
          </a>
          <a
            href={`https://www.buymeacoffee.com/dpashutskii`}
            target="_blank"
            rel="noopener noreferrer"
            className="no-underline shadow-none"
          >
            <CoffeeIcon
              className="text-gray-800 fill-current hover:text-blue-800"
              width={50}
              height={50}
            />
          </a>
          <a
            href={`https://www.t.me/guar47`}
            target="_blank"
            rel="noopener noreferrer"
            className="no-underline shadow-none"
          >
            <TelegramIcon
              className="text-gray-800 fill-current hover:text-blue-800"
              width={50}
              height={50}
            />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Social
