import React from 'react'
import * as S from './Checkbox.styled'

type CheckboxProps = {
  onChange: any
  name: string
  type?: 'number' | 'text' | 'checkbox' | 'email' | 'password'
  value: boolean
}

const Checkbox: React.FC<CheckboxProps> = ({
  onChange,
  name,
  type = 'checkbox',
  value,
}) => {
  return (
    <S.Checkbox type={type} name={name} onChange={onChange} checked={value} />
  )
}

export default Checkbox
