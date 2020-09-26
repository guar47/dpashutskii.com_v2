/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import Social from "./social"
import SignUpForm from "./sign-up-form"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
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
        <span className="text-2xl font-headers font-black">
          Hi <span role="img" aria-label="Victory hand">✌️</span> I'm Dmitrii
        </span>
        <Image
          fixed={data.avatar.childImageSharp.fixed}
          alt={author}
          className="ml-2 rounded-full"
          imgStyle={{ borderRadius: `50%` }}
        />
      </div>
      <div className="mb-2">
        I am a full-stack software engineer, traveler, and maker.
      </div>
      <div className="mb-2">
        I mostly work with <b>Ruby</b> and <b>Javascript</b> languages. My
        favorite web frameworks are <b>Ruby on Rails</b> and <b>React.js</b>.
      </div>
      <div className="mb-2">
        In my spare time, I love hacking my own projects, write and tweet about
        them.
      </div>
      <div className="mt-10">
        <Social />
        <SignUpForm />
      </div>
    </div>
  )
}

export default Bio
