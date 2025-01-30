import { useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import { QuizProvider, useQuizContext } from './context/QuizContext'
import { fetchQuestions } from './services/question-service'
import LandingPage from './pages/LandingPage'
import QuizPage from './pages/QuizPage'
import Result from './pages/Result'

function AppContent() {
  const { setQuestions } = useQuizContext()

  useEffect(() => {
    const loadQuestions = async () => {
      try {
        const fetchedQuestions = await fetchQuestions()
        setQuestions(fetchedQuestions)
        
      } catch (error) {
        console.error('Failed to load questions:', error)
        
      }
    }

    loadQuestions()
  }, [setQuestions])

  return (
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='/quiz/:questionId' element={<QuizPage />} />
      <Route path='/results' element={<Result />} />
    </Routes>
  )
}

function App () {
  return (
    <BrowserRouter>
      <QuizProvider>
        <AppContent />
      </QuizProvider>
    </BrowserRouter>
  )
}

export default App
