import React from "react"
import * as S from "./styled"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const Logo = () => (
  <S.LogoWrapper>
    <AniLink cover direction="left" duration={0.6} bg="black" to="/">
      Geeker Code
    </AniLink>
  </S.LogoWrapper>)

export default Logo
