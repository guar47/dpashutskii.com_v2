import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"

class BlogIndex extends React.Component {
  render() {
    const { data, pageContext } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    const textClass = {
      travel: "text-green-800",
      making: "text-indigo-800",
      personal: "text-gray-800",
      dev: "text-yellow-800"
    }

    const bgClass = {
      travel: "bg-green-100",
      making: "bg-indigo-100",
      personal: "bg-gray-100",
      dev: "bg-yellow-100"
    }

    const borderClass = {
      travel: "border-green-400",
      making: "border-indigo-400",
      personal: "border-gray-400",
      dev: "border-yellow-400"
    }

    return (
      <Layout
        location={this.props.location}
        title={siteTitle}
        lang={pageContext.langKey}
      >
        <SEO title="Main page" />
        <Bio lang={pageContext.langKey} />
        <h2 className="text-xl mt-0 mb-3 font-bold">Latest blog posts:</h2>
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <article className="mb-5" key={node.fields.slug}>
              <header>
                <h3 class="mt-3 mb-0">
                  <Link
                    className="text-lg font-bold shadow-none font-text"
                    to={`${node.fields.slug}`}
                  >
                    {title}
                  </Link>
                </h3>
                <span
                  class={`mr-3 px-2 inline-flex text-xs leading-5 font-semibold rounded-sm border
                          ${borderClass[node.frontmatter.category]}
                          ${bgClass[node.frontmatter.category]}
                          ${textClass[node.frontmatter.category]}`}
                >
                  {node.frontmatter.category}
                </span>
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
    allMarkdownRemark(
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
            category
          }
        }
      }
    }
  }
`
