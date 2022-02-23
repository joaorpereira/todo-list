import { Routes, Route } from 'react-router-dom'

import Home from '../pages/Home/Home'
import CreateTask from '../pages/CreateTask/CreateTask'

const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/create' element={<CreateTask />} />
    </Routes>
  )
}

export default Router
