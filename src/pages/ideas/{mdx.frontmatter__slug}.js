import * as React from 'react'
import Layout from '../../components/layout'
import Seo from '../../components/seo'
import { graphql } from 'gatsby'

const IdeaPost = ({ data, children }) => {
  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <p>Published {data.mdx.frontmatter.date} by: {data.mdx.frontmatter.contributor}</p>
      {children}
    </Layout>
  )
}

export const query = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
        contributor
      }
    }
  }
`

export const Head = ({ data }) => <Seo title={data.mdx.frontmatter.title} />

export default IdeaPost