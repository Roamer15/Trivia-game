const QUIZ_QUESTIONS_URL = 'https:opentdb.com/api.php?amount=10&difficulty=hard&type=boolean'

const fetchQuestions = async () => {
    try {
        const response = await fetch(QUIZ_QUESTIONS_URL)

        if(!response.ok){
            throw new Error("URL not found")
        }
        const data = await response.json()
        return data

    }

    catch (error){
        console.log('Error fetching data', error)
    }
}

export default fetchQuestions