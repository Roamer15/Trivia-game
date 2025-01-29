import { useContext, createContext } from 'react'


export const QuestionContext = createContext()

export const useQuestion = () => {
    const question = useContext(QuestionContext)

    if (question === undefined){
        throw new Error("useQuestion must be used with QuestionProvider")
    }

    return question //{question, setQuestion}
}