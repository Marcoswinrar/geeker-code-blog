import styled from "styled-components"
import { Grid } from "react-flexbox-grid"
import media from "styled-media-query"

export const LayoutWrapper = styled.div``

export const MainWrapper = styled(Grid)`
  z-index: 1;
  width: 70%;
  margin: 5% auto;
  padding-top: 2%;
  background-color: rgba(10, 10, 10, 0.8);
  border-top: 3px solid rgba(192, 41, 66, 0.8);
  border-radius: 6px 6px 0 0;
  box-shadow: 0 -20px 40px rgb(0 0 0 / 20%);

  ${media.lessThan("medium")`
    width: 90%;
  `}

  ${media.lessThan("small")`
    position: relative;
    top: 83px;
    z-index: 0;
    height: 100%;
    background-color: rgba(10, 10, 10, 0.8);
  `}

`