import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

class Confirm extends React.Component {
  render() {
    const { data, pageContext } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout
        location={this.props.location}
        title={siteTitle}
        lang={pageContext.langKey}
      >
        <SEO title="Confirm subscription" />
        <h1>The last step...</h1>
        <p>
          Thank you for subscribing. You will need to check your inbox and
          confirm your subscription.
        </p>
      </Layout>
    )
  }
}

export default Confirm

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
