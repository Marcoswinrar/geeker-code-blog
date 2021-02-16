import React from "react"

import * as S from "./styled"

const Navbar = () => (
  <S.NavbarWrapper>
    <S.LinkWrapper cover direction="left" duration={0.6} bg="black" to="/">Home</S.LinkWrapper>
    <S.LinkWrapper cover direction="left" duration={0.6} bg="black" to="/about/">Sobre</S.LinkWrapper>
  </S.NavbarWrapper>
)

export default Navbar