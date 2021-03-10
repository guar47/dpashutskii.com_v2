import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ProjectsComponent from "../components/projects"

class Projects extends React.Component {
  render() {
    const { data, pageContext } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout
        location={this.props.location}
        title={siteTitle}
        lang={pageContext.langKey}
      >
        <SEO title="Side projects list" />
        <ProjectsComponent />
      </Layout>
    )
  }
}

export default Projects

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
