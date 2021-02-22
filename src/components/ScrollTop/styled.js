import styled from "styled-components"
import {ArrowUpCircleFill} from "@styled-icons/bootstrap/ArrowUpCircleFill"
import media from "styled-media-query"

export const ScrollTopWrapper = styled(ArrowUpCircleFill) `
  width: 40px;
  height: 40px;
  color: black;
  position: fixed;
  z-index: 1000;
  
  ${media.greaterThan("medium")`
    display:none;
  `}

  ${media.lessThan("medium")`
    right: 60px;
    bottom: 11px;
    color: white;
    width: 30px;
    height: 30px;
  `}

`