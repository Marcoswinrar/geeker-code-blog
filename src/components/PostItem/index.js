import React from "react"
import PropTypes from "prop-types"
import * as S from "./styled"

const PostItem = ({ slug, category, date, title, description }) => (
  <S.PostItemLink cover direction="left" duration={0.6} bg="black" to={slug}>
    <S.PostItemWrapper>
      <S.PostItemInfo>
        <S.PostItemDate>{date}</S.PostItemDate>
        <S.PostItemTag>
          <S.PostItemHash>#</S.PostItemHash>
          {category}
        </S.PostItemTag>
      </S.PostItemInfo>
      <S.PostItemContent>
        <S.PostItemTitle>{title}</S.PostItemTitle>
      </S.PostItemContent>
      <S.PostItemDescription>{description}</S.PostItemDescription>
    </S.PostItemWrapper>
  </S.PostItemLink>
)

PostItem.propTypes = {
  slug: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
}

export default PostItem
