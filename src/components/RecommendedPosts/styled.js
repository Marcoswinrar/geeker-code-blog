import styled from "styled-components"
import { Link } from "gatsby"

export const RecommendedWrapper = styled.section`
  border-top: 1px solid #c02942;
  display: flex;
`

export const RecommendedLink = styled(Link)`
  align-items: center;
  color: white;
  display: flex;
  padding: 3rem;
  text-decoration: none;
  width: 100%;
  transition: color .2s ease;

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
`