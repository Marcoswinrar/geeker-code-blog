import styled from "styled-components"
import { Menu } from "@styled-icons/feather/Menu"
import media from "styled-media-query"

export const MenuIconWrapper = styled(Menu)`
  width: 36px;
  height: 36px;
  color: #c02942;
  margin-right: 10px;
  display:none;

  ${media.lessThan("small")`
    display: block;
    position: fixed;
    right: 10px;
    top: 23px;
    z-index: 1;
  `}

`