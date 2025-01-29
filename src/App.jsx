import { BrowserRouter, Routes, Route } from 'react-router'
import LandingPage from './pages/LandingPage'
import QuizPage from './pages/QuizPage'
import Instructions from './pages/Instructions'
import { useState, useMemo, useEffect } from 'react'
import { fetchQuestions} from './services/question-service'
import { QuestionContext } from './context/context'
import './App.css'

function App() {
  const [question, setQuestion] = useState([]);

    async function getQuestions() {
        const questions = await fetchQuestions();
        setQuestion(questions.results);
    }

    console.log(question)

    useEffect(() => {
        getQuestions();
    }, []);

    const questionsWithId = useMemo(() => {
        return question.map((ask, index) => ({
            ...ask,
            id: index + 1, // Ensuring stable keys
        }));
    }, [question]);

  return (
    <>
    <QuestionContext.Provider values ={questionsWithId}>
    <BrowserRouter>
        <Routes>
          <Route path='/' element = {<LandingPage />} />
          <Route path='/quiz/:id' element = {<QuizPage />} />
          <Route path='/instructions' element = {<Instructions />} />
        </Routes>
      </BrowserRouter>
    </QuestionContext.Provider>
     
    </>
  )
}

export default App
