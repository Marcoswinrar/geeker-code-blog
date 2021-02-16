import styled from "styled-components"
import media from "styled-media-query"

export const FooterBarWrapper = styled.footer`
  position: fixed;
  bottom:0;
  width: 100%;
  height: 45px;
  background: black;
  padding: 5px;
  text-align: center;

  ${media.greaterThan("small")`
    display: none;
  `}
`