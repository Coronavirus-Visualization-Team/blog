import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm, scale } from "../utils/typography"

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata.title
  const { previous, next } = pageContext

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <article
          style={{
            width: `100%`,
            backgroundColor: `white`,
            border: `2px solid`
          }}
      >
        <header>
          <h1
            style={{
              fontFamily:"'Chivo', sans-serif",
              fontWeight: "bold",
              marginTop: rhythm(1),
              paddingTop: `2vh`,
              marginBottom: 0,
              paddingLeft: `2.3vw`,
              paddingRight: `2.5vw`
            }}
          >
            {post.frontmatter.title}
          </h1>
          <p
            style={{
              ...scale(-1 / 5),
              fontFamily:"'Chivo', sans-serif",
              fontWeight: "bold",
              display: `block`,
              marginBottom: rhythm(1),
              paddingLeft: `2.5vw`,
              paddingRight: `2.5vw`
            }}
          >
            {post.frontmatter.date}
          </p>
        </header>
        <section dangerouslySetInnerHTML={{ __html: post.html }}             
          style={{
              paddingLeft: `2.5vw`,
              paddingRight: `2.5vw`
            }} 
        />
        <hr
          style={{
            margin: rhythm(1),
          }}
        />
        <footer
          style={{
            ...scale(-1 / 5),
            display: `block`,
            marginBottom: rhythm(1),
            paddingLeft: `2.5vw`,
            paddingRight: `2.5vw`
          }}
        >
          <Bio />
        </footer>
      </article>

      <nav>
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </Layout>
  )
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
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`
