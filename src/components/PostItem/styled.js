import styled from "styled-components"
import AniLink from "gatsby-plugin-transition-link/AniLink"

export const PostItemWrapper = styled.div`
  color: black;
  text-transform: uppercase;
  margin: 10px;
  height: 340px;
  display: flex;
  position: relative;

  &:before {
    display: flex;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: all 0.4s ease-in-out;
    opacity: .5;
    background-color: #151515;
  }

  &:hover::before {
    opacity: .8;
 }
`

export const PostItemImage = styled.img`
  object-fit: cover;
  object-position: 50% 35%
`

export const PostItemLink = styled(AniLink)`
  text-decoration: none;
`
export const PostItemDate = styled.time`
  font-size: .8rem;
  font-weight: 900;
  margin-top: 1rem;
  color: white;
`
export const PostItemTag = styled.div`
  color: white;
  background: ${props => props.background};
  padding: 10px;
  text-align: center;
  padding: 0 1.5rem;
  width: 45px;
  position: absolute;
  top: 10px;
  left: 10px;
`

export const PostItemInfo = styled.div`
  display: flex;
  alig-items: center;
  justify-content: space-between;
  margin-bottom: 1%;
`

export const PostItemContent = styled.div`
  display: flex;
  flex-flow: column;
}
`

export const PostItemTitle = styled.div`
  font-family : Exo;
  margin-top: 1rem;
  font-size: 1rem;
  text-align: center;
  color: white;
`

export const PostItemDescription = styled.div`
  position: absolute;
  top: 45%;
  left: 10px;
  font-size: 1.2rem;
  color: white;
  text-align: center;
  font-style: italic;
`

export const PostItemFooter = styled.footer`
  position: absolute;
  left: 10px;
  bottom: 10px;
`
