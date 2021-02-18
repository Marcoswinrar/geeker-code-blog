import styled from "styled-components"

export const PostItemWrapper = styled.div`
  color: black;
  text-transform: uppercase;
  margin: 10px;
  height: 340px;
  display: flex;
  position: relative;
  background: url(${props => props.image}) 50% 35%;
  background-size: cover;

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
export const PostItemDate = styled.time`
  font-size: 1.1rem;
  font-weight: 900;
  margin-top: 1rem;
  color: white;
`
export const PostItemTag = styled.div`
  color: white;
  background: ${props => props.background};
  padding: 10px;
  width: 45px;
  text-align: center;
  padding: 0 1.5rem;
`
export const PostItemInfo = styled.div`
  display: flex;
  alig-items: center;
  justify-content: space-between;
  margin-bottom: 1%;
`

export const PostItemContent = styled.div`
  position: absolute;
  left: 20px;
  bottom: 10px;
  display: flex;
  flex-flow: column;
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
  color: white;

  :hover {
    color: #c02942;
  }
`
export const PostItemTitle = styled.div`
  font-family : Exo;
  margin-top: 1rem;
  font-size: 2rem;
  text-align: center;
  color: white;
`