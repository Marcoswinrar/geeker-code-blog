import styled from "styled-components"
import media from "styled-media-query"

export const FooterBarWrapper = styled.footer`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 45px;
  background: black;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 60px;
  z-index: 999;

  ${media.greaterThan("medium")`
    display: none;
  `}
`