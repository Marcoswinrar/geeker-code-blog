import styled from "styled-components"
import media from "styled-media-query"

export const HeaderWrapper = styled.header`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  position: relative;
  background-color: black;
  border-bottom: 3px solid rgba(192, 41, 66, 0.8);

  .active {
    color: white;
  }


  ${media.lessThan("small")`
    position: fixed;
    top: 0;
    z-index: 1;

  `}

`

export const LinkWrapper = styled.nav`
  display: flex;
  width: 100%;
  justify-content: center;

  a {
    color: #c02942;
    text-decoration: none;
    text-transform: uppercase;
    font-weight: 900;
    font-size: 1rem;
    padding: 1rem;
    transition: all 0.2s ease-in-out;
  }

  a:hover {
    color: white;
  }


  ${media.lessThan("small")`
    display:none;
  `}
`
