import React from "react"
import PropTypes from "prop-types"
import LastPost from "./LastPost"
import * as S from "./styled"

const PostItem = ({ slug, category, date, title, description, background, index, image }) => (
  <S.PostItemLink cover direction="left" duration={0.6} bg="black" to={slug}>
    {
      index === 0 ?
        <LastPost
          image={image}
          background={background}
          category={category}
          title={title}
          date={date}
        />
        :
        <S.PostItemWrapper image={image}>
          <S.PostItemContent>
            <S.PostItemTag background={background}>
              {category}
            </S.PostItemTag>
            <S.PostItemDescription>
              {description}
            </S.PostItemDescription>
          </S.PostItemContent>
          <S.PostItemFooter>
            <S.PostItemTitle>{title}</S.PostItemTitle>
            <S.PostItemInfo>
              <S.PostItemDate>{date}</S.PostItemDate>
            </S.PostItemInfo>
          </S.PostItemFooter>
        </S.PostItemWrapper>
    }

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
