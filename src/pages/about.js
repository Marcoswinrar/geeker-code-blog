import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import { MainContent } from "../components/Post/styled"

const AboutPage = () => (
  <Layout>
    <SEO
      title="Sobre"
      description="Saiba um pouco sobre quem está por trás do blog!"
    />
    <MainContent>
      <h1> Geeker Code Blog </h1>
      <p>
        Olá, me chamo Marcos Eduardo Winiarski, sou do sertão do Paraná e moro em uma cidade muito louca
        chamada Capitão Leônidas Marques. Alias acho que ninguém deve conhecer né ? (não pesquisem!!!)
      </p>
      <p>
        Atualmente sou desenvolvedor na{' '}
        <a
          style={{color: "#c02942"}}
          href="https://ambevtech.com.br/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ambev Tech
      </a>
      #tamojunto.
      </p>
      <p>
        Formado em TADS(Analise de Sistemas) desde 2018. Apaixonado
        por web, especialmente front-end é claro. Gosto de desenvolver
        pois sinto no desenvolvimento a liberdade de criar coisas jamais pensadas de uma
        forma divertida.
      </p>
      <p>
        É justamente por isso que este blog nasceu, com o intuíto de compartilhar
        conhecimento e de aprender cada vez mais. Espero que gostem !
      </p>
      <h2>Contato</h2>
      <p>
        Você pode entrar em contato comigo atráves de qualquer um dos links que estão no cabeçalho do blog ou abaixo caso esteja acessando pelo celular.
      </p>
    </MainContent>

  </Layout >
)

export default AboutPage
