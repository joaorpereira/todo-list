import React from 'react'
import * as S from './Modal.styled'

type ModalProps = {
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>
  title: string
  children: React.ReactNode
}

const Modal: React.FC<ModalProps> = ({ setOpenModal, title, children }) => {
  return (
    <S.Background>
      <S.Container>
        <S.TitleCloseButton>
          <S.CloseButton onClick={() => setOpenModal(false)}>x</S.CloseButton>
        </S.TitleCloseButton>
        <S.Title>{title}</S.Title>
        <S.Content>{children}</S.Content>
      </S.Container>
    </S.Background>
  )
}

export default Modal
