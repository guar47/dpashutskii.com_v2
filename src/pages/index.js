import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"

class BlogIndex extends React.Component {
  render() {
    const { data, pageContext } = this.props
    const siteTitle = data.site.siteMetadata.title
    const makingBlogPosts = data.makingBlogPosts.edges
    const travelPosts = data.travelPosts.edges

    return (
      <Layout
        location={this.props.location}
        title={siteTitle}
        lang={pageContext.langKey}
      >
        <SEO title="Main page" />
        <Bio lang={pageContext.langKey} />
        <h2 className="text-xl mt-20 mb-3 font-bold">
          Posts about indie making:
        </h2>
        {makingBlogPosts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <article className="mb-5" key={node.fields.slug}>
              <header>
                <h3 className="mt-3 mb-0">
                  <Link
                    className="text-lg font-bold shadow-none font-text"
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
        <h2 className="text-xl mt-20 mb-3 font-bold">
          Posts about traveling and digital nomading:
        </h2>
        {travelPosts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <article className="mb-5" key={node.fields.slug}>
              <header>
                <h3 className="mt-3 mb-0">
                  <Link
                    className="text-lg font-bold shadow-none font-text"
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
    makingBlogPosts: allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        fields: { langKey: { eq: "en" } }
        frontmatter: {
          category: { eq: "making" }
        }
      }
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
    travelPosts: allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        fields: { langKey: { eq: "en" } }
        frontmatter: {
          category: { eq: "travel" }
        }
      }
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
