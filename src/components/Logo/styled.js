import styled from "styled-components"
import media from "styled-media-query"

export const LogoWrapper = styled.div`
  color: white;
  font-size: 3rem;
  text-transform: uppercase;
  text-align: center;

  a {
    text-decoration: none;
    color: white;
  }

  ${media.lessThan("medium")`
      font-size: 2rem;
      margin-top: 10px;
  `}

}
`
