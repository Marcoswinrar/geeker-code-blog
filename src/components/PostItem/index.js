import React from "react"
import PropTypes from "prop-types"
import * as S from "./styled"

const PostItem = ({ slug, category, date, title, background }) => (
  <S.PostItemLink to={slug}>
    <S.PostItemWrapper>
      <S.PostItemInfo>
        <S.PostItemDate>{date}</S.PostItemDate>
        <S.PostItemTag>
          <S.PostItemHash>#</S.PostItemHash>
          {category}
        </S.PostItemTag>
      </S.PostItemInfo>
      <S.PostItemContent backgroundImage={background}/>
      <S.PostItemDescription>{title}</S.PostItemDescription>
    </S.PostItemWrapper>
  </S.PostItemLink>
)

PostItem.propTypes = {
  slug: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

export default PostItem
