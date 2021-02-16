import styled from 'styled-components'
import media from "styled-media-query"

export const PaginationWrapper = styled.section`
  align-items: center;
  display: flex;
  padding: 1.5rem 3rem;
  justify-content: space-between;
  font-size: 1.2rem;

  a {
    text-decoration: none;
    transition: color 0.5s;
    &:hover {
      color: #c02942;
    }
  }
  ${media.lessThan("small")`
    margin-bottom: 100px;
  `}
`