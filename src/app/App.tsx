import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Home from '../pages/home/Home'
import Chat from '../pages/chat/Chat'

const App: React.FC = () => {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/chat' element={<Chat />} />
        </Routes>
      </MainLayout>
    </Router>
  )
}

export default App
