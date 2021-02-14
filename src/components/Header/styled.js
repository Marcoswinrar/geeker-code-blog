import styled from "styled-components"

export const HeaderWrapper = styled.header`
  width: 100%;
  height: 80px;
  display: flex;
  position: relative;
  z-index: 1;
  background-color: black;
  border-bottom: 3px solid rgba(192, 41, 66, 0.8);
`

export const LinkWrapper = styled.nav`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;

  a {
    color: #c02942;
    text-decoration: none;
    text-transform: uppercase;
    font-weight: 900;
    font-size: 1.4rem;
    padding: 1.2rem;
    transition: all 0.2s ease-in-out;
  }

  a:hover {
    color: white;
  }
`
