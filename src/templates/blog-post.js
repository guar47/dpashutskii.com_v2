import React from "react"
import { graphql } from "gatsby"

import Social from "../components/social"
import Layout from "../components/layout"
import SEO from "../components/seo"
import SignUpForm from "../components/sign-up-form"
import { rhythm, scale } from "../utils/typography"

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const { langKey } = this.props.pageContext
    const image = post.frontmatter.image
      ? post.frontmatter.image.childImageSharp.resize
      : null

    return (
      <Layout location={this.props.location} title={siteTitle} lang={langKey}>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
          image={image}
        />
        <article>
          <header>
            <h1 className="my-0 text-4xl font-black">
              {post.frontmatter.title}
            </h1>
            <p
              style={{
                ...scale(-1 / 5),
                display: `block`,
                marginBottom: rhythm(1),
              }}
            >
              {post.frontmatter.date}
            </p>
          </header>
          <section dangerouslySetInnerHTML={{ __html: post.html }} />
          <hr className="h-px" />
          <footer className="mt-5 mb-10">
            <Social />
            {langKey === "en" && <SignUpForm />}
          </footer>
        </article>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "DD.MM.YYYY")
        description
        image: featured {
          childImageSharp {
            resize(width: 1200) {
              src
              height
              width
            }
          }
        }
      }
    }
  }
`
