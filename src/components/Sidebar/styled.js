import styled from "styled-components"
import media from "styled-media-query"

export const SidebarWrapper = styled.aside`
  position: fixed;
  width: 100%;
  height: 100vh;
  background: black;
  transition: background .4s ease;
  top: 83px;
  display: flex;

  .active {
    color: #c02942;
  }

  ${media.greaterThan("small")`
    display:none;
  `}

`
  
export const LinkWrapper = styled.nav`  
  display: flex;
  width: 100%;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 25%;

    a {
      text-decoration: none;
      color: white;
      font-size: 1.5rem;
      text-transform: uppercase;
      font-family: 'Exo', sans-serif;
      padding: 1%;
    }

    &:hover {
      coler: #c02942;
    }

`