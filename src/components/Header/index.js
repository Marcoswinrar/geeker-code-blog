import React from "react"
import SocialLinks from "../SocialLinks"
import Logo from "../Logo"
import * as S from "./styled"
import { Search } from "@styled-icons/feather/Search"


const Header = () => {
  return (
    <S.HeaderWrapper style={{
      width: "70%",
      height: "100px",
      display: "flex",
      margin: "0 auto",
      justifyContent: "space-between",
      alignItems: "center"
    }}>
      <S.SocialLinksWrapper>
        <SocialLinks />
      </S.SocialLinksWrapper>
      <Logo />
      <S.LinkWrapper>
        <S.SearchLink cover direction="left" duration={0.6} bg="black" to="/search/">Buscar <Search /></S.SearchLink>
      </S.LinkWrapper>
    </S.HeaderWrapper>
  )
}

export default Header
