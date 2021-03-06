import styled from "styled-components"
import {LinkedinWithCircle} from "@styled-icons/entypo-social/LinkedinWithCircle"
import {GithubWithCircle} from "@styled-icons/entypo-social/GithubWithCircle"
import media from "styled-media-query"

export const LinkedinIcon = styled(LinkedinWithCircle)``
export const GithubIcon = styled(GithubWithCircle)``
export const LinkWrapper = styled.a``
export const SocialLinksContent = styled.div`
  display: flex;
  justify-content: center;
  text-decoration: none;

  a {
    color: white;
    width: 32px;
    height: 32px;
    padding: 5px;
  }

  ${media.lessThan("medium")`
      margin-top: 5px;
  `}

`