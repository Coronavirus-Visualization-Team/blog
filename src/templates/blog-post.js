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
            border: `2px solid`,
            color: `#272727`
          }}
      >
        <header>
          <h1
            style={{
              fontFamily:"'Noto Serif JP', sans-serif",
              fontWeight: "bold",
              marginTop: rhythm(1),
              paddingTop: `2vh`,
              marginBottom: 0,
              paddingLeft: `2.3vw`,
              paddingRight: `2.5vw`, 
              color: `#272727`
            }}
          >
            {post.frontmatter.title}
          </h1>
          <p
            style={{
              ...scale(-1 / 5),
              fontFamily:"'Noto Serif JP', sans-serif",
              fontWeight: "normal",
              display: `block`,
              marginBottom: rhythm(1),
              marginTop: rhythm(1),
              paddingLeft: `2.5vw`,
              paddingRight: `2.5vw`,
              color: `#272727`
            }}
          >
            {post.frontmatter.date}
          </p>
          <p
            style={{
              fontFamily:"'Noto Serif JP', sans-serif",
              fontWeight: "normal",
              display: `block`,
              marginBottom: rhythm(1),
              paddingLeft: `2.5vw`,
              paddingRight: `2.5vw`,
              color: `#272727`
            }}
          >
            By {post.frontmatter.author}
          </p>
        </header>
        <section dangerouslySetInnerHTML={{ __html: post.html }}             
          style={{
              paddingLeft: `2.5vw`,
              paddingRight: `2.5vw`,
              fontFamily:"'Noto Serif JP', sans-serif",
              fontWeight: "normal",
              fontSize: "18px",
              color: `#272727`
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
            paddingRight: `2.5vw`,
            color: `#272727`
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
            marginTop: rhythm(1),
            fontFamily:"'Noto Serif JP', sans-serif",
            fontWeight: "normal",
            color: `#272727`
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
        author
      }
    }
  }
`
