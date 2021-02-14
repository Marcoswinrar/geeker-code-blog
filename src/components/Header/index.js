import React from "react"
import { Link } from "gatsby"
import * as S from "./styled"

const Header = () => (
  <S.HeaderWrapper>
    <S.LinkWrapper>
      <Link to="/">Home</Link>
      <Link to="/about">Sobre</Link>
    </S.LinkWrapper>
  </S.HeaderWrapper>
)

export default Header
