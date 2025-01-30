import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router'
import { useQuizContext } from '../context/QuizContext'
import ListQuestions from '../components/ListQuestions'

function QuizPage() {
  const { questions, currentQuestionIndex, setCurrentQuestionIndex, userAnswers, setUserAnswers } = useQuizContext()
  // const [timeLeft, setTimeLeft] = useState(30)
  const navigate = useNavigate()
  const { questionId } = useParams()

  useEffect(() => {
    setCurrentQuestionIndex(Number.parseInt(questionId || '0', 10))
  }, [questionId, setCurrentQuestionIndex])

  const handleAnswer = (answer) => {
    const newAnswers = [...userAnswers]
    newAnswers[currentQuestionIndex] = answer
    setUserAnswers(newAnswers)

    if (currentQuestionIndex < questions.length - 1) {
      navigate(`/quiz/${currentQuestionIndex + 1}`)
      // setTimeLeft(30)
    } else {
      navigate('/results')
    }
  }

  if (!questions[currentQuestionIndex]) {
    return <div className='container'>Loading...</div>
  }

  const { question } = questions[currentQuestionIndex]

  return (
    <>
      <ListQuestions currentQuestion={currentQuestionIndex} question={question} onAnswer={handleAnswer} questionLength={questions.length} />
    </>

  )
}

export default QuizPage
