import React from 'react'
import PropTypes from 'prop-types'
import Particles from 'react-particles-js';
import ParticleConfig from '../config/Particle'
import Header from './Header'

const Layout = ({ children }) => {
  return (
    <>
      <Particles params={ParticleConfig} style={{
        position: 'absolute',
        backgroundColor: "#2d3436"
      }} />
      <Header />
      <main>
        {children}
      </main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
