import React from "react"
import * as S from "./styled"

const LastPost = ({ image, background, category, title, date }) => (

  <S.PostItemWrapper image={image}>
    <S.PostItemContent>
      <S.PostItemTag background={background}>
        {category}
      </S.PostItemTag>
      <S.PostItemTitle>{title}</S.PostItemTitle>
      <S.PostItemInfo>
        <S.PostItemDate>{date}</S.PostItemDate>
      </S.PostItemInfo>
    </S.PostItemContent>

  </S.PostItemWrapper>
)

export default LastPost