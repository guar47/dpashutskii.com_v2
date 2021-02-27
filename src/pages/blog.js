import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

class Blog extends React.Component {
  render() {
    const { data, pageContext } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    const textClass = {
      making: "text-indigo-800",
      personal: "text-gray-800",
      dev: "text-yellow-800",
      travel: "text-green-800"
    }

    const bgClass = {
      making: "bg-indigo-100",
      personal: "bg-gray-100",
      dev: "bg-yellow-100",
      travel: "bg-green-100"
    }

    const borderClass = {
      making: "border-indigo-400",
      personal: "border-gray-400",
      dev: "border-yellow-400",
      travel: "border-green-400"
    }

    return (
      <Layout
        location={this.props.location}
        title={siteTitle}
        lang={pageContext.langKey}
      >
        <SEO title="Side projects list" />
        <h2 className="text-xl mt-0 mb-5 font-bold">Blog posts:</h2>
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <article
              className="mb-5 sm:pb-4 mt-4 border-b flex flex-col sm:flex-row"
              key={node.fields.slug}
            >
              {node.frontmatter.image && (
                <Link
                  className="shadow-none sm:w-1/3 sm:flex-shrink-0"
                  to={`${node.fields.slug}`}
                >
                  <Img
                    fluid={node.frontmatter.image.childImageSharp.fluid}
                    backgroundColor={`#040e18`}
                    className="h-full sm:w-full rounded-sm hover:opacity-70"
                  />
                </Link>
              )}
              <header className="mt-3 sm:ml-5">
                <h3 className="my-0">
                  <Link
                    className="text-md font-bold shadow-none font-text text-gray-800 hover:text-blue-800"
                    to={`${node.fields.slug}`}
                  >
                    {title}
                  </Link>
                </h3>
                <span
                  className={`mr-3 px-2 inline-flex text-xs leading-5 font-semibold rounded-sm border
                          ${borderClass[node.frontmatter.category]}
                          ${bgClass[node.frontmatter.category]}
                          ${textClass[node.frontmatter.category]}`}
                >
                  {node.frontmatter.category}
                </span>
                <small>{node.frontmatter.date}</small>
                <p className="mt-3">{node.frontmatter.description}</p>
              </header>
            </article>
          )
        })}
      </Layout>
    )
  }
}

export default Blog

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
            image: featured {
              childImageSharp {
                fluid(maxWidth: 1500, maxHeight: 900) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
