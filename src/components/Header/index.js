import React, { useState } from "react"
import { Link } from "gatsby"
import * as S from "./styled"
import MenuIcon from "../MenuIcon"
import Sidebar from "../Sidebar"

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false)

  const OpenMenu = () => {
    setOpenMenu(!openMenu)
  }

  return (
    <S.HeaderWrapper>
      <S.LinkWrapper>
        <Link activeClassName="active" to="/">Home</Link>
        <Link activeClassName="active" to="/about">Sobre</Link>
        <Link activeClassName="active" to="/search">Buscar Conteúdo</Link>
      </S.LinkWrapper>
      <span onClick={() => OpenMenu()}>
        <MenuIcon />
      </span>
      { openMenu && <Sidebar />}
    </S.HeaderWrapper>
  )
}

export default Header
