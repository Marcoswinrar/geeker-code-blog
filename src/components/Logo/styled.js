import styled from "styled-components"
import media from "styled-media-query"

export const LogoWrapper = styled.h1`
  color: white;
  font-size: 5rem;
  font-style: italic;
  font-weight: 900;
  text-shadow: -3px -3px 0 #c02942, 0 3px 3px #124160;
  text-transform: uppercase;
  text-align: center;
  margin-top: 5%;

  ${media.between("small", "medium")`
    font-size: 3.5rem;  
  `}

  ${media.lessThan("small")`
    font-size: 1.75rem;
    position: fixed;
    left: 20px;
    top: 10px;
    z-index: 1;
  `}

}
`
