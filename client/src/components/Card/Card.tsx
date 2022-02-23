import React from 'react'
import * as S from './Card.styled'
import { format } from 'date-fns'

import Checkbox from '../Checkbox/Checkbox'
import Button from '../Button/Button'
import { Task } from '../../utils/types'

type CardProps = {
  task: Task
  handleCheck: (task: Task) => void
  onEdit: (task: Task) => void
  onRemove: (task: Task) => Promise<void>
}

const Card: React.FC<CardProps> = ({ task, handleCheck, onEdit, onRemove }) => {
  return (
    <S.Wrapper>
      <Checkbox
        onChange={() => handleCheck(task)}
        name={task.title}
        value={task.status}
      />
      <S.Content status={task.status}>
        <p>
          <b>{task.title}</b>
        </p>
        <p>{task.description}</p>
      </S.Content>
      <S.Div>
        <S.CreateInformation>
          <p>
            Created at{' '}
            {format(new Date(task.created_at as string), 'MM/dd/yyyy')} by{' '}
            {task.username}
          </p>
        </S.CreateInformation>
        <S.ButtonWrapper>
          <Button color='#304d63' onClick={onEdit}>
            Edit
          </Button>
          <Button color='red' onClick={() => onRemove(task)} marginLeft='8px'>
            Remove
          </Button>
        </S.ButtonWrapper>
      </S.Div>
    </S.Wrapper>
  )
}

export default Card
