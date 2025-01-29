import PropTypes from "prop-types"

function ListQuestions({ question }) {
    return (
        <div className="question">
            <p>Difficulty: {question.difficulty}</p>
            <p>{question.category}</p>
            <p>Question {question.id}: {question.question}</p>
        </div>
    )
}

export default ListQuestions

ListQuestions.propTypes = {
    question: PropTypes.object
}