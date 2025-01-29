import { BrowserRouter, Routes, Route } from 'react-router'
import LandingPage from './pages/LandingPage'
import QuizPage from './pages/QuizPage'
import Instructions from './pages/Instructions'
import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element = {<LandingPage />} />
          <Route path='/quiz' element = {<QuizPage />} />
          <Route path='/instructions' element = {<Instructions />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
