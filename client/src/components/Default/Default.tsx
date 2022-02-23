import React from 'react'
import Router from '../../routes/routes'
import Sidebar from '../Sidebar/Sidebar'

import * as S from './Default.styled'

const Default = () => {
  return (
    <S.Wrapper>
      <Sidebar />
      <S.Section>
        <Router />
      </S.Section>
    </S.Wrapper>
  )
}

export default Default
