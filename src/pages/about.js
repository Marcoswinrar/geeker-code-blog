import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import { MainContent } from "../components/Post/styled"
import SocialLinks from "../components/SocialLinks"

const AboutPage = () => (
  <Layout>
    <SEO
      title="Sobre"
      description="Saiba um pouco sobre quem está por trás do blog!"
    />
    <MainContent>
      <h1> Geeker Code Blog </h1>
      <p>
        Olá, me chamo Marcos Eduardo Winiarski, sou do interior do Paraná de uma cidade
        chamada Capitão Leônidas Marques, pois é acho que ninguem conhece...
      </p>
      <p>
        Atualmente sou desenvolvedor na{' '}
        <a
          href="https://ambevtech.com.br/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ambev Tech (#tamojunto)
      </a>
      , além disso curto muito desenvolvimento, jogos e leitura.

      Sou formado em TADS(Analise de Sistemas) desde 2018. Apaixonado
      por web, especialmente front-end é claro (kkkk). Acho que posso ser livre
      e aprender mais fácilmente. Adoro estudar e tentar ajudar os outros.
      </p>
      <p>
        É justamente por isso que este blog nasceu, com o intuíto de compartilhar
        conhecimento e de cada vez aprender mais.
      </p>
      <h2>Contato</h2>
      <p>
        Você pode entrar em contato comigo atráves de qualquer um dos links abaixo.
      </p>
      <SocialLinks />
    </MainContent>

  </Layout >
)

export default AboutPage
