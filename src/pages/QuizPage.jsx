import { useState, useEffect,useMemo } from "react"
import { fetchQuestions } from '../services/question-service'

function QuizPage() {

    const [question, setQuestion] = useState([])

    useEffect(()=> {
        getQuestions()
    },[])

    async function getQuestions() {
        const questions = await fetchQuestions()
        setQuestion(questions)
    }

    const questionsWithId = useMemo (() => {
        return question.map((question) => ({
            ...question,
            id: Math.random()
        }))
    },[question])

    return (
        <>
           <div className="question-container">
            
           </div>
        </>
    )
}

export default QuizPage