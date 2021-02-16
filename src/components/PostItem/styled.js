import styled from "styled-components"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import media from "styled-media-query"

export const PostItemWrapper = styled.div`
  color: white;
  text-transform: uppercase;
  margin: 10px;
`
export const PostItemLink = styled(AniLink)`
  text-decoration: none;
`
export const PostItemDate = styled.time`
  font-size: 1.1rem;
  font-weight: 900;
`
export const PostItemTag = styled.div`
  text-transform: uppercase;
  font-weight: 900;
  color: #c02942;
  font-style: italic;

  :hover {
    color: #124160;
  }
`
export const PostItemInfo = styled.div`
  display: flex;
  alig-items: center;
  justify-content: space-between;
  margin-bottom: 1%;
`

export const PostItemHash = styled.span`
  font-weight: 900;
  font-size: 1.2rem;
`
export const PostItemContent = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  height: 340px;
  overflow: hidden;
  text-overflow: ellipsis;
  background: ${props => props.background};
  padding: 20px;
  transition: background .5s ease;

  &:hover {
    background: rgba(192,41,66,.4);
  }

  ${media.lessThan("small")`
    height: 160px;
  `}

}
`

export const PostItemTitle = styled.div`
  font-family : 'Exo', sans-serif, Roboto;
  font-size: 2rem;
  text-align: center;

  ${media.between("large", "huge")`
    font-size: 1.6rem;
  `}

  ${media.lessThan("medium")`
    font-size: 1.2rem;
  `}

  ${media.lessThan("small")`
    font-size: 2rem;
  `}

`

export const PostItemDescription = styled.div`
  padding: 21px;
  text-transform: uppercase;
  font-style: italic;
  font-weight: 600;
  line-height: 31px;
  font-size: 21px;
  background: black;
  margin-bottom: 30px;

  :hover {
    color: #c02942;
  }
`
