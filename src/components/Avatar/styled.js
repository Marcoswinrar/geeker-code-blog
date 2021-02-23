import styled from "styled-components"
import media from "styled-media-query"
import Img from "gatsby-image"

export const AvatarWrapper = styled(Img)`
  
  width: 160px;
  height: 160px;
  border-radius: 50%;
  object-fit: cover;
  margin: 15px auto;

  img {
    margin: 0 !important;
  }
  
`
