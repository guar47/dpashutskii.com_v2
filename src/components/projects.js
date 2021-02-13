import React from "react"

import ProjectCard from "./project-card"

const Projects = () => {
  return (
    <div className="mb-12">
      <h2 className="text-2xl mt-0 mb-3 font-bold">My projects:</h2>
      <h3 className="text-xl mt-0 mb-3 font-bold">Web development:</h3>
      <div className="grid grid-col-1 gap-4">
        <ProjectCard
          title="Arcade Hub"
          description="Apple Arcade games aggregator."
          launchDate="2020-03-17"
          url="https://arcade-hub.com"
          stack={true}
        />
        <ProjectCard
          title="Learning Story"
          description="Community and goal achieving platform that encourages people to
          share and discuss their learnings in public."
          launchDate={"2020-12-15"}
          url="https://getlearningstory.com"
          stack={true}
        />
        <h3 className="text-xl mt-5 mb-0 font-bold">Non tech projects:</h3>
        <ProjectCard
          title="DN Journey YouTube channel"
          description="YouTube channel about traveling, nomading and related experiences."
          launchDate="2018-08-30"
          url="https://www.youtube.com/channel/UCtZd4Chy6nqjX1X06ypzEgw"
          stack={false}
        />
        <ProjectCard
          title="AnotherWayOut"
          description="Telegram channel in Russian about traveling, immigration, remote work and nomad lifestyle."
          launchDate="2019-04-24"
          url="https://t.me/another_way_out"
          stack={false}
        />
        <ProjectCard
          title="DN Journey Blog"
          description="Blog about traveling, nomading and related experiences."
          launchDate="2021-01-15"
          url="https://dnjourney.com"
          stack={false}
        />
        <ProjectCard
          title="Coding YouTube channel"
          description="YouTube channel about web development, general programming and other tech related topics."
          launchDate="2021-02-04"
          url="https://www.youtube.com/channel/UCqgoEzNIMYpCQNEGxawx_6w"
          stack={false}
        />
      </div>
    </div>
  )
}

export default Projects
