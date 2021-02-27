---
title: Desenvolvendo um blog - Parte 01
description: Quais tecnologias e ferramentas forma utilizadas para desenvolver o Geeker Code
date: 2021-02-26 11:22:47
image: assets/img/gatsby-cover.png
category: dev
background: "#637a91"
---
Ao começar o processo de construção desse blog, optei por estudar algo novo e então adaptar as minhas metas com o que aprendi, a esse projeto. Eis que então, após algum esforço e algumas semanas de estudo o meu site nasceu. Espero que as tecnologias abaixo apresentadas, lhe tragam também a mesma vontade do desconhecido e a de criar algo a partir dele.

* [GatsbyJS](https://www.gatsbyjs.com/)
* [GraphQL](https://graphql.org/)
* [Styled-Components](https://styled-components.com/)
* [Styled-Media-Query](https://www.npmjs.com/package/styled-media-query)

## GatsbyJS

![GatsbyJS](/assets/img/gatsby-png.png "Logo do framework javascript GatsbyJS")

O Gatsby é um framework javascript baseado no React que gera estáticos, o que chamamos de SSG(Static Site Generator), além disto usa a força do GraphQL para consumir os dados do site sejam eles assets ou **markdown** alem de outros.

Por se tratar de um estático o Gatsby se torna bem atrativo para apps que não precisam buscar conteúdo dinâmico. Com uma comunidade incrível, plugins e uma documentação gigante, esse framework está ganhando cada vez mais popularidade, pois quando se trata de performance, otimização e SEO para sua página, ele é muito bom no que faz.

## GraphQL

![GraphQL](assets/img/graphql.png "Logo do GraphQL")

Assim como o React, o GraphQL também foi desenvolvido pelo facebook. Porém o seu objetivo é o consumo de dados baseado no que seu componente precisa quando é renderizado. 

Um exemplo é o meu componente de Post. Quando carrego ele, peço para o GraphQL trazer apenas o que o post precisa mostrar para o usuário.

```jsx
export const query = graphql`
  query Post($slug: String!) {
    markdownRemark() {
      frontmatter {
        title
        date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
        image
        description
      },
      timeToRead
      html
    }
  } // Traz todas as informações do post (Titulo, Data(Formatada), imagem e descrição.
`
```

Bacana não ?

## Styled-Components

![Styled Components](/assets/img/styledcomponents.png "Logo da biblioteca styled components")

Quando falamos de estilização no React, pode ter certeza que a maioria das pessoas já pensa no **Styled-Components**. Ainda mais quando não queremos bagunça no nosso projeto com colisão de classes. Até hoje tenho problemas com arquivos .**css** que por falta de padronização em um projeto, possuem em componentes diferentes, as mesmas classes, e ai mora o perigo, onde coisas malucas e estilos não desejados começam a aparecer. Por isso aprecio o uso do CSS-in-JS.

Como eu disse anteriormente, ele atua muito bem, criando arquivos JS para estilização e automatizando nomenclatura de classes, você evita conflitos no seu projeto.

O seu foco então se torna o de apenas estilizar, e, não mais escrever classes, já que se você escrever:

```css
.logo {
}
```

Você vai gerar algo assim:

```css
.logo_a2a2_1 {
}
```

No mais seu CSS-in-JS ficara da seguinte maneira:

```jsx
import styled from "styled-components"

export const LogoWrapper = styled.div`
  color: white;
  font-size: 3rem;
  text-transform: uppercase;
  text-align: center;
}
`
```

Gerando:

```css
.Logo_Wrapper_a1a1_1 {
  color: white;
  font-size: 3rem;
  text-transform: uppercase;
  text-align: center;
}
```

## Styled-Media-Query

Pensando em adaptabilidade do site para o mobile, poderíamos usar um media query padrão, junto ao nosso **Styled-Components**. Porém, com o **styled-media-query** podemos incrementar um pouco o desenvolvimento, o tornando mais simples. Segue um exemplo do meu blog.

Styled com media query padrão:

```jsx
import styled from "styled-components"

export const LinkWrapper = styled.div`
  display: flex;
  align-items: center;
  
  @media(max-width: 768px) {
    display: block
  } // Quando a resolução baixar dos 768px o display do Link se torna block.
`
```

No styled-media-query:

```jsx
import styled from "styled-components"
import media from "styled-media-query"

export const LinkWrapper = styled.div`
  display: flex;
  align-items: center;
  
  ${media.lessThan("small")}`
    display: block
  `
`
```

Observe que é simples de igual maneira, porém o fato aqui é, com a biblioteca você tem a gama dos tamanhos das telas padronizados e acaba escrevendo menos. Porém se você fizer do seu jeito, vai ser um pouco mais complexo deixar seu site responsivo em todas os pontos de quebra.

Existem vários métodos entre eles:

```jsx
${media.lessThan("small" || "medium" || "large")}`
   //Estilos aplicados quando menor que pequeno, médio ou grande.
 `
  
${media.greaterThan("small" || "medium" || "large")}`
  //Estilos aplicados quando maior que pequeno, médio ou grande.
 `
 
 ${media.between("small", "medium")}`
 // Estilos aplicados entre dois tamanhos de tela.
 `
 
 // Todos os tamanhos 

 {
  huge: '1440px',
  large: '1170px',
  medium: '768px',
  small: '450px',
}
```

Interessante não ? Lembrando que esses valores de quebras das telas (tamanho) são centralizados e podem ser configurados.

## Concluindo

O código fonte do meu blog está no **Github** e é público. Caso tenham interesse podem acessá-lo por aqui. **[Geeker-code-blog](https://github.com/Marcoswinrar/geeker-code-blog)**

Essa é a primeira parte. Estarei lançando em breve um segundo post falando sobre deploy e ferramentas. Já que é bem interessante e normalmente o pessoal gosta de saber como todo o processo é feito.

Espero que tenham gostado. E caso surjam dúvidas, podem entrar em contato comigo que ficarei feliz em responder.