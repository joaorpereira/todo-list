import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../../components/Button/Button'
import Input from '../../components/Input/Input'
import Loading from '../../assets/Loading'

import api from '../../services/api'
import { Task } from '../../utils/types'
import * as S from './CreateTask.styled'

const CreateTask = () => {
  const navigate = useNavigate()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState<Task>({
    username: '',
    title: '',
    description: '',
    status: false,
  })

  const handleForm = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setForm({
      ...form,
      [name]: value,
    })
  }

  const createTask = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      const res = await api.post('/task', form)
      if (res.data) {
        navigate('/')
      }
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message)
      }
    } finally {
      setForm({
        username: '',
        title: '',
        description: '',
        status: false,
      })
      setLoading(false)
    }
  }

  useEffect(() => {
    const { description, username, title } = form
    if (description !== '' || username !== '' || title !== '') {
      setError('')
    }
  }, [form])

  return (
    <S.Wrapper>
      <S.Title>Create Todo</S.Title>
      <S.Form onSubmit={createTask}>
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
        <Button type='submit' color='#228B22'>
          {loading ? <Loading color='#ffffff' size='25px' /> : 'SUBMIT'}
        </Button>
      </S.Form>
    </S.Wrapper>
  )
}

export default CreateTask
