import styled from "styled-components"

export const SearchWrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  transition: opacity 0.4s;
  .ais-InstantSearch__root {
    display: flex;
    flex-direction: column;
    height: auto;
    width: 100%;
  }
  .ais-SearchBox,
  .ais-Stats {
    padding: 0.5rem 3rem;
  }
  
  .ais-SearchBox {
    padding-top: 1rem;
    padding-bottom: 1rem;
  }

  .ais-Stats {
    color: white;
  }

  .ais-SearchBox-input {
    background: none;
    border: none;
    border-bottom: 1px solid white;
    color: white;
    display: flex;
    font-size: 1.3rem;
    padding: 0.5rem;
    width: 100%;
    &::placeholder {
      color: white;
    }
  }
  .ais-SearchBox-submit,
  .ais-SearchBox-reset {
    display: none;
  }
`