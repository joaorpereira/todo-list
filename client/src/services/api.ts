import axios from 'axios'

const api = axios.create({
  baseURL: process.env.REACT_APP_URL || 'http://localhost:3003',
  headers: {
    'Content-Type': 'application/json',
  },
})

export default api
