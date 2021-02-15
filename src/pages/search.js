import React from "react"
import Layout from "../components/Layout"
import Search from "../components/Search"
import SEO from "../components/seo"

const SearchPage = () => (
  <Layout>
    <SEO title="Buscar Conteúdo" />
    <Search />
  </Layout>
)

export default SearchPage
