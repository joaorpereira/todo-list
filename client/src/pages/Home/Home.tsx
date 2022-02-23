import React, { useCallback, useEffect, useState } from 'react'
import EditModal from './EditModal/EditModal'
import Card from '../../components/Card/Card'
import Modal from '../../components/Modal/Modal'
import Loading from '../../assets/Loading'
import api from '../../services/api'
import { Task } from '../../utils/types'

import * as S from './Home.styled'

const Home = () => {
  const [tasks, setTasks] = useState<Task[]>([])
  const [error, setError] = useState('')
  const [modalOpen, setOpenModal] = useState(false)
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

  const handleOpenModal = (task: Task) => {
    setForm(task)
    setOpenModal(true)
  }

  const getTaskList = useCallback(async () => {
    try {
      const res = await api.get('/task')
      setTasks(res.data)
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message)
      }
    }
  }, [])

  useEffect(() => {
    getTaskList()
  }, [getTaskList])

  const editTask = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      await api.put(`/task/${form.id}`, form)
      getTaskList()
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message)
      }
    } finally {
      setLoading(false)
      setOpenModal(false)
    }
  }

  const removeTask = async (task: Task) => {
    try {
      await api.delete(`/task/${task.id}`)
      getTaskList()
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message)
      }
    }
  }

  const handleCheck = async (task: Task) => {
    try {
      await api.put(`/task/${task.id}`, { ...task, status: !task.status })
      getTaskList()
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message)
      }
    }
  }

  return (
    <S.Wrapper>
      <S.Title>Todo's List</S.Title>
      {error ? <S.ErrorMessage>{error} </S.ErrorMessage> : <p />}
      {tasks.length === 0 ? (
        <Loading />
      ) : (
        <ul>
          {tasks?.map(task => (
            <Card
              task={task}
              handleCheck={handleCheck}
              onEdit={() => handleOpenModal(task)}
              onRemove={removeTask}
            />
          ))}
        </ul>
      )}
      {modalOpen && (
        <Modal setOpenModal={setOpenModal} title='Edit Task'>
          <EditModal
            form={form}
            editTask={editTask}
            handleForm={handleForm}
            error={error}
            setOpenModal={setOpenModal}
            loading={loading}
          />
        </Modal>
      )}
    </S.Wrapper>
  )
}

export default Home
