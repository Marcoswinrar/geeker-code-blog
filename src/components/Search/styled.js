import styled from "styled-components"

export const SearchWrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 85%;
  margin: 0 auto;
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

  .ais-SearchBox-input {
    background: none;
    border: none;
    border-bottom: 1px solid black;
    display: flex;
    font-size: 1.3rem;
    padding: 0.5rem;
    width: 100%;
    margin: 0 auto;
  }
  .ais-SearchBox-submit,
  .ais-SearchBox-reset {
    display: none;
  }
`