import React from "react"
import Image from "gatsby-image"
import NodeJsIcon from "../../content/assets/icons/nodejs-icon.svg"
import MongoDbIcon from "../../content/assets/icons/mongodb-icon.svg"
import ExpressIcon from "../../content/assets/icons/express-icon.svg"
import ReactIcon from "../../content/assets/icons/react-icon.svg"
import JavascriptIcon from "../../content/assets/icons/javascript-icon.svg"
import RubyIcon from "../../content/assets/icons/ruby-icon.svg"
import RailsIcon from "../../content/assets/icons/rails-icon.svg"
import PostgresIcon from "../../content/assets/icons/postgresql-icon.svg"
import PythonIcon from "../../content/assets/icons/python-icon.svg"
import DjangoIcon from "../../content/assets/icons/django-icon.svg"

import ProjectCard from "./project-card"

const Projects = () => {
  return (
    <div className="mb-12">
      <h2 className="text-2xl mb-7 mt-0 font-black">my projects:</h2>

      <article className="mb-7 font-headers border-b border-black pb-2">
        <h3 className="mt-2 mb-0">
          <a
            className="font-semibold shadow-none text-black hover:text-blue-800"
            href="https://nextplaceto.com"
            target="_blank"
            rel="noreferrer"
          >
            nextplace.
          </a>
        </h3>
        <div className="text-black">
          <span className="">
            website about visas for digital nomads, financial independant and
            other long-term expats.
          </span>
        </div>
        <div className="text-black">
          <span className="font-semibold">launched:</span> 10.03.2021
        </div>
        <div className="text-black">
          <span className="font-semibold mr-2">stack v1:</span>
          python, django, postgresql, javascript
        </div>
        <div className="text-black">
          <span className="font-semibold mr-2">stack v2:</span>
          javascript, next.js, posgtgresql, strapi
        </div>
      </article>

      <article className="mb-7 font-headers border-b border-black pb-2">
        <h3 className="mt-2 mb-0">
          <a
            className="font-semibold shadow-none text-black hover:text-blue-800"
            href="https://getlearningstory.com"
            target="_blank"
            rel="noreferrer"
          >
            learning story.
          </a>
        </h3>
        <div className="text-black">
          <span className="">
            community and goal achieving platform that encourages people to
            share and discuss their learnings in public.
          </span>
        </div>
        <div className="text-black">
          <span className="font-semibold">launched:</span> 15.12.2020
        </div>
        <div className="text-black">
          <span className="font-semibold mr-2">stack:</span>
          ruby, ruby on rails, postgresql, javascript
        </div>
      </article>


      <article className="mb-7 font-headers border-b border-black pb-2">
        <h3 className="mt-2 mb-0">
          <a
            className="font-semibold shadow-none text-black hover:text-blue-800"
            href="https://arcade-hub.com"
            target="_blank"
            rel="noreferrer"
          >
            arcade-hub.
          </a>
        </h3>
        <div className="text-black">
          <span className="">apple arcade games aggregator.</span>
        </div>
        <div className="text-black">
          <span className="font-semibold">launched:</span> 17.03.2020
        </div>
        <div className="text-black">
          <span className="font-semibold mr-2">stack:</span>
          javascript, react.js, node.js
        </div>
      </article>


      <article className="mb-7 font-headers border-b border-black pb-2">
        <h3 className="mt-2 mb-0">
          <a
            className="font-semibold shadow-none text-black hover:text-blue-800"
            href="https://t.me/another_way_out"
            target="_blank"
            rel="noreferrer"
          >
            another way out.
          </a>
        </h3>
        <div className="text-black">
          <span className="">
            telegram channel in Russian about traveling, immigration, remote
            work and nomad lifestyle.
          </span>
        </div>
        <div className="text-black">
          <span className="font-semibold">launched:</span> 24.04.2019
        </div>
      </article>


      <article className="mb-7 font-headers border-b border-black pb-2">
        <h3 className="mt-2 mb-0">
          <a
            className="font-semibold shadow-none text-black hover:text-blue-800"
            href="https://www.youtube.com/channel/UCtZd4Chy6nqjX1X06ypzEgw"
            target="_blank"
            rel="noreferrer"
          >
            youtube channel.
          </a>
        </h3>
        <div className="text-black">
          <span className="">
            my channel about traveling, nomading, tech and related experiences
          </span>
        </div>
        <div className="text-black">
          <span className="font-semibold">launched:</span> 30.08.2018
        </div>
      </article>


      <article className="mb-7 font-headers border-b border-black pb-2">
        <h3 className="mt-2 mb-0">
          <a
            className="font-semibold shadow-none text-black hover:text-blue-800"
            href="https://dpashutskii.com"
            target="_blank"
            rel="noreferrer"
          >
            blog.
          </a>
        </h3>
        <div className="text-black">
          <span className="">
            this blog about indie making, development, traveling and nomading.
          </span>
        </div>
        <div className="text-black">
          <span className="font-semibold">launched:</span> 21.07.2018
        </div>
        <div className="text-black">
          <span className="font-semibold mr-2">stack:</span>
          javascript, gatsbyjs, markdown
        </div>
      </article>
    </div>
  )
}

export default Projects
