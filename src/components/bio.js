import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Image from "gatsby-image"
import Social from "./social"

const Bio = props => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 150, height: 150) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author
          social {
            twitter
          }
        }
      }
    }
  `)

  const { author } = data.site.siteMetadata
  return (
    <div className="mb-7">
      <div className="flex items-center mb-2">
        <Image
          fixed={data.avatar.childImageSharp.fixed}
          alt={author}
          className="mr-2 rounded-md"
          imgStyle={{ borderRadius: `25%` }}
        />
        <span className="text-2xl font-black font-headers">
          Hi{" "}
          <span role="img" aria-label="Victory hand">
            ✌️
          </span>{" "}
          I'm Dmitrii
        </span>
      </div>
      <div className="">
        I write code, travel the world,{" "}
        <a
          href="https://www.youtube.com/channel/UCtZd4Chy6nqjX1X06ypzEgw"
          target="_blank"
          rel="noreferrer"
        >
          make videos
        </a>
        , and{` `}
        <Link to={`/projects`}>hack side projects. </Link>
        <span role="img" aria-label="Fire">
          💻 🧳 🔥
        </span>{" "}
      </div>
      <div className="mt-5">
        In 2020-2021 I am making{" "}
        <a href="https://12xstartup.com/" target="_blank" rel="noreferrer">
          12 startups in 12 months
        </a>{" "}
        in public and share my experience.
      </div>
      <div className="mt-7">
        <Social lang={props.lang} />
      </div>
    </div>
  )
}

export default Bio
