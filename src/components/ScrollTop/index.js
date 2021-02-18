import React from "react"
import * as S from "./styled"

const ScrollTop = () => <S.ScrollTopWrapper onClick={() => window.scroll({ top: 0, behavior: 'smooth' })} />

export default ScrollTop