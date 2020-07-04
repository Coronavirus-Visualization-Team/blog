import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" />
      <Bio />
      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug
        return (
          <article key={node.fields.slug}>
            <div
              style={{
                margin: `auto`,
                position: `relative`,
                backgroundColor: `white`,
              }}
            >
            <header>
              <h3
                style={{
                  fontFamily: "'Noto Serif JP', sans-serif",
                  fontWeight: "bold",
                  fontSize: "24px",
                  marginBottom: rhythm(1 / 4),
                  marginRight: rhythm(1 / 4),
                  marginTop: rhythm(3 / 8)
                }}
              >
                <Link style={{ boxShadow: `none`, color: `#272727` }} to={node.fields.slug}>
                  {title}
                </Link>
              </h3>
              <small
                style={{
                  fontFamily: "'Noto Serif JP', sans-serif",
                  fontWeight: "normal",
                  marginBottom: rhythm(1 / 4),
                }}
              >{node.frontmatter.date}
              </small>
            </header>
            <section
              style={{
                paddingBottom: `0.5vh`,
                fontFamily: "'Noto Serif JP', sans-serif",
                fontWeight: `normal`,
                fontSize: "18px"
              }} >
              <p
                dangerouslySetInnerHTML={{
                  __html: node.frontmatter.description || node.excerpt,
                }}
              />
            </section>
         </div>
      </article>
        )
      })}
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            author
          }
        }
      }
    }
  }
`
