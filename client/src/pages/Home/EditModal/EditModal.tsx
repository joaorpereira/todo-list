import React from 'react'
import Button from '../../../components/Button/Button'
import Input from '../../../components/Input/Input'
import Loading from '../../../assets/Loading'
import { Task } from '../../../utils/types'
import * as S from './EditModal.styled'

type EditModalProps = {
  form: Task
  editTask: (e: React.FormEvent) => Promise<void>
  handleForm: (e: React.ChangeEvent<HTMLInputElement>) => void
  error: string
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>
  loading: boolean
}

const EditModal: React.FC<EditModalProps> = ({
  form,
  editTask,
  handleForm,
  error,
  setOpenModal,
  loading,
}) => {
  return (
    <S.Form onSubmit={editTask}>
      <S.Label htmlFor='username'>User</S.Label>
      <Input
        type='text'
        value={form.username}
        name='username'
        placeholder='Username'
        onChange={handleForm}
      />
      <S.Label htmlFor='username'>Title</S.Label>
      <Input
        type='text'
        value={form.title}
        name='title'
        placeholder='Title'
        onChange={handleForm}
      />
      <S.Label htmlFor='username'>Description</S.Label>
      <Input
        type='text'
        value={form.description}
        name='description'
        placeholder='Description'
        onChange={handleForm}
      />
      {error ? <S.ErrorMessage>{error}</S.ErrorMessage> : <p />}
      <S.ButtonWrapper>
        <Button onClick={() => setOpenModal(false)} color='gray'>
          CANCEL
        </Button>
        <Button type='submit' color='#228B22' marginLeft='8px'>
          {loading ? <Loading color='#ffffff' size='25px' /> : 'SUBMIT'}
        </Button>
      </S.ButtonWrapper>
    </S.Form>
  )
}

export default EditModal
