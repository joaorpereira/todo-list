import React from 'react'
import * as S from './Input.styled'

type InputProps = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  name: string
  value: string | number
  placeholder?: string
  type: 'number' | 'text' | 'checkbox' | 'email' | 'password'
}

const Input: React.FC<InputProps> = ({
  onChange,
  name,
  value,
  placeholder,
  type = 'text',
}) => {
  return (
    <S.Input
      type={type}
      value={value}
      name={name}
      placeholder={placeholder}
      onChange={onChange}
    />
  )
}

export default Input
