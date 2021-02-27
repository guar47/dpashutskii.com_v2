import React from "react"

import ProjectCard from "./project-card"

const Projects = () => {
  return (
    <div className="mb-12">
      <h2 className="text-2xl mt-0 mb-3 font-bold">My projects:</h2>
      <h3 className="text-xl mt-0 mb-3 font-bold">Tech:</h3>
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
        <h3 className="text-xl mt-5 mb-0 font-bold">Non tech:</h3>
        <ProjectCard
          title="This Blog"
          description="Blog about indie making, development, traveling and nomading."
          launchDate="2018-07-21"
          url="https://dpashutskii.com"
          stack={false}
        />
        <ProjectCard
          title="YouTube channel"
          description="My channel about traveling, nomading, tech and related experiences."
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
      </div>
    </div>
  )
}

export default Projects
