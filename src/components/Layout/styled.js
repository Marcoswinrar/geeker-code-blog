import styled from "styled-components"
import { Grid } from "react-flexbox-grid"
import media from "styled-media-query"

export const LayoutWrapper = styled.div`
`

export const MainWrapper = styled.main`
  padding-top: 2%;
  background-color: #f2f2f2;
`
export const GridWrapper = styled(Grid)`
  width: 90%;

  ${media.lessThan("small")`
    width: 100%;
  `}
`