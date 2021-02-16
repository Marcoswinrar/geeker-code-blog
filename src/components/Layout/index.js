import React from "react"
import PropTypes from "prop-types"
import Particles from "react-particles-js"
import ParticleConfig from "../../config/Particle"
import Header from "../Header"
import GlobalStyles from "../../styles/global"
import Logo from "../Logo"
import * as S from "./styled"

const Layout = ({ children }) => {
  return (
    <S.LayoutWrapper>
      <GlobalStyles />
      <Particles
        params={ParticleConfig}
        style={{
          position: "fixed",
          zIndex: "-1"
        }}
      />
      <Header />
      <Logo />
      <S.MainWrapper fluid>{children}</S.MainWrapper>
    </S.LayoutWrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
