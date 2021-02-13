import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import NodeJsIcon from "../../content/assets/icons/nodejs-icon.svg"
import MongoDbIcon from "../../content/assets/icons/mongodb-icon.svg"
import ExpressIcon from "../../content/assets/icons/express-icon.svg"
import ReactIcon from "../../content/assets/icons/react-icon.svg"
import JavascriptIcon from "../../content/assets/icons/javascript-icon.svg"
import RubyIcon from "../../content/assets/icons/ruby-icon.svg"
import RailsIcon from "../../content/assets/icons/rails-icon.svg"
import PostgresIcon from "../../content/assets/icons/postgresql-icon.svg"

const ProjectCard = props => {
  const data = useStaticQuery(graphql`
    query ProjectsQuery {
      arcadeHubImage: file(
        absolutePath: { regex: "/arcade-hub-screenshot.png/" }
      ) {
        childImageSharp {
          fixed(width: 350, height: 250) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      learningStoryImage: file(
        absolutePath: { regex: "/learning-story-screenshot.png/" }
      ) {
        childImageSharp {
          fixed(width: 350, height: 250) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      dnJourneyYoutubeImage: file(
        absolutePath: { regex: "/dnjourney-youtube-channel.png/" }
      ) {
        childImageSharp {
          fixed(width: 350, height: 250) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      anotherWayOutImage: file(
        absolutePath: { regex: "/anotherwayout-screenshot.png/" }
      ) {
        childImageSharp {
          fixed(width: 350, height: 250) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      dnJourneyImage: file(
        absolutePath: { regex: "/dnjourney-blog-screenshot.png/" }
      ) {
        childImageSharp {
          fixed(width: 350, height: 250) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      codingYouTubeImage: file(
        absolutePath: { regex: "/coding-youtube-screenshot.png/" }
      ) {
        childImageSharp {
          fixed(width: 350, height: 250) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  const { title, description, launchDate, url, stack } = props

  const imageUrls = {
    "Arcade Hub": data.arcadeHubImage.childImageSharp.fixed,
    "Learning Story": data.learningStoryImage.childImageSharp.fixed,
    "DN Journey YouTube channel":
      data.dnJourneyYoutubeImage.childImageSharp.fixed,
    AnotherWayOut: data.anotherWayOutImage.childImageSharp.fixed,
    "DN Journey Blog": data.dnJourneyImage.childImageSharp.fixed,
    "Coding YouTube channel": data.codingYouTubeImage.childImageSharp.fixed,
  }

  const stackElements = {
    "Arcade Hub": (
      <div className="flex">
        <JavascriptIcon
          className="text-gray-800 border border-black rounded p-1"
          width={50}
          height={50}
        />
        <NodeJsIcon
          className="text-gray-800 border ml-2 border-black rounded p-1"
          width={50}
          height={50}
        />
        <ExpressIcon
          className="text-gray-800 ml-2 border border-black rounded p-1"
          width={50}
          height={50}
        />
        <MongoDbIcon
          className="text-gray-800 ml-2 border border-black rounded p-1"
          width={50}
          height={50}
        />
        <ReactIcon
          className="text-gray-800 ml-2 border border-black rounded p-1"
          width={50}
          height={50}
        />
      </div>
    ),
    "Learning Story": (
      <div className="flex">
        <RubyIcon
          className="text-gray-800 border border-black rounded p-1"
          width={50}
          height={50}
        />
        <RailsIcon
          className="text-gray-800 ml-2 border border-black rounded p-1"
          width={50}
          height={50}
        />
        <PostgresIcon
          className="text-gray-800 ml-2 border border-black rounded p-1"
          width={50}
          height={50}
        />
        <JavascriptIcon
          className="text-gray-800 ml-2 border border-black rounded p-1"
          width={50}
          height={50}
        />
      </div>
    ),
  }

  return (
    <div
      className="bg-white w-full flex items-center p-4 rounded-xl shadow
                    border transform transition-transform hover:scale-105"
    >
      <a
        className="overflow-hidden w-full h-full text-transparent no-underline flex"
        href={url}
        target="_blank"
        rel="noreferrer"
      >
        <Image
          fixed={imageUrls[title]}
          alt="Arcade-hub screenshot"
          className="mr-5 rounded-md mb-0 flex-shrink-0 border-2 border-black"
        />
        <div className="flex flex-col">
          <h3 className="font-bold text-black mt-0 mb-1">{title}</h3>
          <p className="text-black mt-0">{description}</p>
          <p className="text-black mb-0">
            <b>Launched:</b> {new Date(launchDate).toLocaleDateString()}
          </p>
          {stack && (
            <p className="text-black mt-2">
              <b>Tech stack:</b> {stackElements[title]}
            </p>
          )}
        </div>
      </a>
    </div>
  )
}

export default ProjectCard
