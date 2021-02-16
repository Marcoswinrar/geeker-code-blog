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
      <SEO title="Home" description="Geeker Code Blog"/>
      <Row>
        {postList.map(
          ({
            node: {
              frontmatter: { category, date, title, description, background, image},
              fields: {
                slug
              }
            }
          }, i) => (
            <Col xs={12} md={6} lg={6} xl={GetPostGridCols(i)} key={i}>
              <PostItem
                slug={slug}
                description={description}
                category={category}
                date={date}
                title={title}
                background={background}
                index={i}
                image={image}
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
