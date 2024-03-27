import * as React from 'react'
import Layout  from '../../components/layout'
import Seo from '../../components/seo'
import { Link, graphql } from 'gatsby'

const IdeaPage = ({ data }) => {
  return (
    <Layout pageTitle="Travel Ideas & Itineraries">
      {
        data.allMdx.nodes.map((node) => (
          <article key={node.id}>
            <h2>
              <Link to={`/ideas/${node.frontmatter.slug}`}>
                {node.frontmatter.title}
              </Link>
            </h2>
            <p>Posted: {node.frontmatter.date} by {node.frontmatter.contributor}</p> 
            <p>{node.frontmatter.excerpt}</p>
            <br></br>
          </article>
        ))
      }
    </Layout>
  )
}

export const query = graphql`
  query {
    allMdx(sort: { frontmatter: { date: DESC }}) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
          slug
          excerpt
          contributor
        }
        id
      }
    }
  }
  `

export const Head = () => <Seo title="Travel Ideas" />

export default IdeaPage