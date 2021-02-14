import styled from "styled-components"
import { Link } from "gatsby"

export const PostItemWrapper = styled.div`
  color: white;
  text-transform: uppercase;
`
export const PostItemLink = styled(Link)`
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
  height: 340px;
  overflow: hidden;
  text-overflow: ellipsis;
  background: url(${props => props.backgroundImage}) 50% 50%;
  padding: 20px;
  transition: background .5s ease;

  &:hover {
    background: url(${props => props.backgroundImage}) 50% 35% repeat;
  }
}
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
