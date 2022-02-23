import React from 'react'
import * as S from './Sidebar.styled'

import AddTodo from '../../assets/AddTodo'
import ListTodo from '../../assets/ListTodo'
import { useNavigate } from 'react-router-dom'

const Sidebar = () => {
  const navigate = useNavigate()
  return (
    <S.Wrapper>
      <S.List>
        <S.ListItem onClick={() => navigate('/')}>
          <ListTodo />
          <span>All Todo</span>
        </S.ListItem>
        <S.ListItem onClick={() => navigate('/create')}>
          <AddTodo />
          <span>Create Todo</span>
        </S.ListItem>
      </S.List>
    </S.Wrapper>
  )
}

export default Sidebar
