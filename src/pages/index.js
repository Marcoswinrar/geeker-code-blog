import React from "react"
import { Row, Col } from 'react-flexbox-grid';
import Layout from "../components/Layout"
import PostItem from "../components/PostItem"
import SEO from "../components/seo"
import vaderImage from '../images/vader.jpg'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Row>
      <Col xs={12} md={6} lg={3}>
        <PostItem
          background={vaderImage}
          slug="/slug"
          category="geek"
          date="19 de agosto"
          title="Ferramentas de criação da Geeker Code"
          description="Quais ferramentas eu usei para criar o blog."
        />
      </Col>
      <Col xs={12} md={6} lg={3}>
        <PostItem
          slug="/slug"
          category="geek"
          date="19 de agosto"
          title="Ferramentas de criação da Geeker Code"
          description="Quais ferramentas eu usei para criar o blog."
        />
      </Col>
      <Col xs={12} md={6} lg={3}>
        <PostItem
          slug="/slug"
          category="geek"
          date="19 de agosto"
          title="Ferramentas de criação da Geeker Code"
          description="Quais ferramentas eu usei para criar o blog."
        />
      </Col>
      <Col xs={12} md={6} lg={3}>
        <PostItem
          slug="/slug"
          category="geek"
          date="19 de agosto"
          title="Ferramentas de criação da Geeker Code"
          description="Quais ferramentas eu usei para criar o blog."
        />
      </Col>
      <Col xs={12} md={6} lg={3}>
        <PostItem
          slug="/slug"
          category="geek"
          date="19 de agosto"
          title="Ferramentas de criação da Geeker Code"
          description="Quais ferramentas eu usei para criar o blog."
        />
      </Col>
    </Row>
  </Layout>
)

export default IndexPage
