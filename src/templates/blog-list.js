import React from "react"
import { graphql } from "gatsby"
import { Row, Col } from "react-flexbox-grid"
import Layout from "../components/Layout"
import PostItem from "../components/PostItem"
import SEO from "../components/seo"
import Pagination from "../components/Pagination"

const BlogList = props => {
  const postList = props.data.allMarkdownRemark.edges

  const { currentPage, numPages } = props.pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage = currentPage - 1 === 1 ? '/' : `/page/${currentPage - 1}`
  const nextPage = `/page/${currentPage + 1}`

  console.log(postList)

  return (
    <Layout>
      <SEO title="Home" />
      <Row>
        {postList.map(
          ({
            node: {
              frontmatter: { category, date, title, background },
              fields: {
                slug
              }
            }
          }) => (
            <Col xs={12} sm={6} md={6} lg={3}>
              <PostItem
                slug={slug}
                background={background}
                category={category}
                date={date}
                title={title}
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
            date(locale: "pt-br", formatString: "DD [de] MMMM")
            title
            background
          }
          timeToRead
        }
      }
    }
  }
`

export default BlogList
