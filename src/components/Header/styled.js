import styled from "styled-components"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import media from "styled-media-query"

export const HeaderWrapper = styled.header`
  ${media.lessThan("medium")`
      width: 100%;
  `}
`
export const LinkWrapper = styled.div`
  display: flex;
  align-items: center;
  svg {
    width: 30px;
    height: 30px;
    color: white;
    margin-left: 3px;
    transition: all .2 ease;
  }
  svg: hover {
    color: #c02942;
  }
  ${media.lessThan("medium")`
     margin-top: 10px;
  `}
`
export const TextSearch = styled.div`
  ${media.lessThan("medium")`
    display: none;
  `}
`
export const SearchLink = styled(AniLink)`
  color: white;
  text-decoration: none;
  text-transform: uppercase;
  transition: all .2 ease;

  &:hover {
    color: #c02942
  }
`
export const SocialLinksWrapper = styled.div`
    ${media.lessThan("medium")`
        display:none;
    `}
`