import React from "react"
import { graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Tile from "../components/Tile"
import { Grid } from "theme-ui"


const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Home" />
      <Bio />
      <div
         style={{
          margin: `auto`,
          position: `relative`,
          backgroundColor: `white`,
          width: `100%`,
          maxWidth: `1024`
        }}
      >
        <Grid columns={[1, 2]} width={["100%", "45%"]}>
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          const image = node.frontmatter.image
          const author = node.frontmatter.author
          return (
            <article key={node.fields.slug}>
              <Tile title={title} img={image} author={author}slug={node.fields.slug}/>
            </article>
          )
        })}         
        </Grid>
      </div>
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
            image
          }
        }
      }
    }
  }
`
