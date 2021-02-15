import styled from 'styled-components'

export const PaginationWrapper = styled.section`
  align-items: center;
  border-top: 1px solid #c02942;
  color: white;
  display: flex;
  padding: 1.5rem 3rem;
  justify-content: space-between;
  a {
    color: white;
    text-decoration: none;
    transition: color 0.5s;
    &:hover {
      color: #c02942;
    }
  }
`