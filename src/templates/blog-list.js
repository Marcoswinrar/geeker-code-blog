import React from "react"
import { graphql } from "gatsby"
import { Row, Col } from "react-flexbox-grid"
import Layout from "../components/Layout"
import PostItem from "../components/PostItem"
import SEO from "../components/seo"
import Pagination from "../components/Pagination"
import { GetPostGridCols } from "../utils/grid_cols"

const BlogList = props => {
  const postList = props.data.allMarkdownRemark.edges

  const { currentPage, numPages } = props.pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage = currentPage - 1 === 1 ? '/' : `/page/${currentPage - 1}`
  const nextPage = `/page/${currentPage + 1}`

  return (
    <Layout>
      <SEO title="Home" />
      <Row>
        {postList.map(({ node }, i) => (
          <Col
            xs={12}
            md={6}
            lg={6}
            xl={GetPostGridCols(i)}
            key={i}>
            <PostItem
              slug={node.fields.slug}
              description={node.frontmatter.description}
              category={node.frontmatter.category}
              date={node.frontmatter.date}
              title={node.frontmatter.title}
              background={node.frontmatter.background}
              image={node.frontmatter.image}
              index={i}
              firstPage={isFirst}
            />
          </Col>
        )
        )}
      </Row>
      <Pagination
        isFirst={isFirst}
        isLast={isLast}
        currentPage={currentPage}
        numPages={numPages}
        prevPage={prevPage}
        nextPage={nextPage}
      />
    </Layout>
  )
}

export const query = graphql`
  query PostList($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            category
            date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
            title
            description
            background
            image
          }
          timeToRead
        }
      }
    }
  }
`

export default BlogList
