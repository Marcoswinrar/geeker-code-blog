import React from "react"
import * as S from "./styled"
import { Link } from "gatsby"

const Sidebar = () => (
  <S.SidebarWrapper>
    <S.LinkWrapper>
      <Link activeClassName="active" to="/">Home</Link>
      <Link activeClassName="active" to="/about">Sobre</Link>
      <Link activeClassName="active" to="/search">Buscar Conteúdo</Link>
    </S.LinkWrapper>
  </S.SidebarWrapper>
)

export default Sidebar