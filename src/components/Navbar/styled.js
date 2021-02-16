import styled from "styled-components"
import AniLink from "gatsby-plugin-transition-link/AniLink"

export const NavbarWrapper = styled.nav`
   width: 70%;
   height: 80px;
   margin: 0 auto;
   display: flex;
   justify-content: center;
   align-items: center;
   margin-top: 2rem;
   border-top: 1px solid rgba(255, 255, 255, 0.1);

   a {
      color: white;
      text-decoration: none;
      text-transform: uppercase;
      font-size: 1.2rem;
      padding: 10px;
      opacity: .8
   }

   a:hover {
     opacity: 1;
   }

`

export const LinkWrapper = styled(AniLink)``