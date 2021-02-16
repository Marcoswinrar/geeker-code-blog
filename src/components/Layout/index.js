import React from "react"
import PropTypes from "prop-types"
import Particles from "react-particles-js"
import ParticleConfig from "../../config/Particle"
import Header from "../Header"
import Navbar from "../Navbar"
import GlobalStyles from "../../styles/global"
import * as S from "./styled"
import FooterBar from "../FooterBar"

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
      <Navbar />
      <S.MainWrapper>
        <S.GridWrapper>
          {children}
        </S.GridWrapper>
      </S.MainWrapper>
      <FooterBar />
    </S.LayoutWrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
