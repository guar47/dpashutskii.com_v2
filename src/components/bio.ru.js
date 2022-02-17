import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import Social from "./social"

const BioRu = props => {
  const data = useStaticQuery(graphql`
    query BioRuQuery {
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
          Привет{" "}
          <span role="img" aria-label="Victory hand">
            ✌️
          </span>{" "}
        </span>
      </div>
      <div className="mb-2">
        Меня зовут Дима и я разработчик, путешественник и инди хакер{" "}
        <span role="img" aria-label="Fire">
          💻 🧳 🔥
        </span>{" "}
      </div>
      <div className="mt-5 mb-2">
        Я путешествую по миру, живу в разных местах планеты и работаю онлайн. Об
        этом я рассказываю в {" "}
        <a href="https://t.me/another_way_out" target="_blank" rel="noreferrer">
          телеграм канале.
        </a>{" "}
      </div>
      <div className="mt-10">
        <Social lang={props.lang} />
      </div>
    </div>
  )
}

export default BioRu
