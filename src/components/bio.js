import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 75, height: 75) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <div className="mb-7 font-headers font-medium">
      <div className="flex items-center mb-4">
        <Image
          fixed={data.avatar.childImageSharp.fixed}
          alt="dmitrii pashutskii photo"
          className="mr-2 rounded-md hover:animate-spin"
          imgStyle={{ borderRadius: `25%` }}
        />
        <div>
          <span className="text-2xl font-black font-headers">
            Hey, my name is Dmitrii.
          </span>
          <Social lang={props.lang} />
        </div>
      </div>
      <p className="mb-0">
        i am a software enigeneer trying to be an indie hacker and youtuber.
      </p>
      <p className="m-0">
        i write code, travel the world, make videos, and hack indie projects.
      </p>
    </div>
  )
}

export default Bio
