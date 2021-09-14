import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"

class BlogIndex extends React.Component {
  render() {
    const { data, pageContext } = this.props
    const siteTitle = data.site.siteMetadata.title
    const latestPosts = data.latestPosts.edges

    return (
      <Layout
        location={this.props.location}
        title={siteTitle}
        lang={pageContext.langKey}
      >
        <SEO title="Main page" />
        <Bio lang={pageContext.langKey} />
        <h2 className="text-2xl mt-10 mb-3 font-black">latest articles:</h2>
        {latestPosts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <article className="mb-3 font-headers" key={node.fields.slug}>
              <header>
                <h3 className="mt-2 mb-0">
                  <Link
                    className="text-lg font-semibold shadow-none text-black hover:text-blue-800"
                    to={`${node.fields.slug}`}
                  >
                    {title}
                  </Link>
                </h3>
                <small>{node.frontmatter.date}</small>
              </header>
            </article>
          )
        })}
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    latestPosts: allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fields: { langKey: { eq: "en" } } }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD.MM.YYYY")
            title
            description
          }
        }
      }
    }
  }
`
