import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import Social from "./social"

const BioRu = () => {
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
    <div className="mb-20">
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
        Меня зовут Дима и я full-stack разработчик, путешественник и онлайн
        предприниматель{" "}
        <span role="img" aria-label="Fire">
          🔥
        </span>
      </div>
      <div className="mt-5 mb-2">
        Я веду телеграм канал{" "}
        <a href="https://t.me/another_way_out" target="_blank" rel="noreferrer">
          Another way out
        </a>
        .
      </div>
      <div className="mb-2">
        Это канал о поиске себя: путь к иммиграции, попытки в мире
        онлайн-бизнеса, путешествия и digital nomad лайфстайл.
      </div>
      <div className="mt-5 mb-2">
        В этом блоге я републикую часть постов и иногда использую его для более
        длинных статей.
      </div>
      <div className="mt-10">
        <Social />
      </div>
    </div>
  )
}

export default BioRu
