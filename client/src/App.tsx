import { BrowserRouter } from 'react-router-dom'
import Default from './components/Default/Default'

import GlobalStyles from './styles/global'

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Default />
    </BrowserRouter>
  )
}

export default App
