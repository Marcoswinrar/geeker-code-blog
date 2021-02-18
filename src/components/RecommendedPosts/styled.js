import styled from "styled-components"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import media from "styled-media-query"

export const RecommendedWrapper = styled.section`
  border-top: 1px dashed black;
  display: flex;
  width: 70%;
  margin: 0 auto;

  ${media.lessThan("medium")`
    width: 100%;
    margin-bottom: 100px;
  `}

`

export const RecommendedLink = styled(AniLink)`
  align-items: center;
  display: flex;
  padding: 3rem;
  text-decoration: none;
  width: 100%;
  transition: color .2s ease;
  color: black;

  &:hover {
    color: #c02942
  }
  &.next {
    justify-content: flex-end;
  }
  &.previous:before {
    content: "\\2190";
    margin-right: 0.5rem;
  }
  &.next:after {
    content: "\\2192";
    margin-left: 0.5rem;
  }

  ${media.lessThan("small")`
    padding: 1.5rem;
  `}
`