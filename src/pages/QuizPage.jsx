// 
import { useState, useEffect, useMemo } from "react";
import { fetchQuestions } from "../services/question-service";
import ListQuestions from "../components/ListQuestions";

function QuizPage() {
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
            <div className="question-container">
                {questionsWithId.map((ask) => (
                    <ListQuestions key={ask.id} question={ask} />
                ))}
            </div>
        </>
    );
}

export default QuizPage;
