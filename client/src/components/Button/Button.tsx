import React from 'react'
import * as S from './Button.styled'

type ButtonProps = {
  onClick?: any
  children: React.ReactNode
  color: string
  marginLeft?: string
  type?: 'button' | 'submit' | 'reset' | undefined
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  color,
  marginLeft,
  type,
}) => {
  return (
    <S.Button
      type={type}
      color={color}
      marginLeft={marginLeft}
      onClick={onClick}
    >
      {children}
    </S.Button>
  )
}

export default Button
