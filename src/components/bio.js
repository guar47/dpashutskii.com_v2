import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import Social from "./social"

const Bio = () => {
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
    <div className="mb-20">
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
      <div className="my-2">
        I am a full-stack software engineer, traveler, and maker{" "}
        <span role="img" aria-label="Fire">
          🔥
        </span>
      </div>
      <div className="my-2">
        I mostly work with <b>Ruby</b> and <b>Javascript</b> languages. My
        favorite web frameworks are <b>Ruby on Rails</b> and <b>React.js</b>.
        Right now I'm also learning <b>Python</b>.
      </div>
      <div className="my-2">
        In 2020-2021 I am making{" "}
        <a href="https://12xstartup.com/" target="_blank" rel="noreferrer">
          12 startups in 12 months
        </a>{" "}
        and share my experience on Twitter and this Blog.
      </div>
      <div className="my-2">
        My project #1:{" "}
        <a href="https://getlearningstory.com" target="_blank" rel="noreferrer">
          Learning Story
        </a>
      </div>
      <div className="mt-10">
        <Social />
      </div>
    </div>
  )
}

export default Bio
