import PropTypes from 'prop-types'

const ResultCard = ({ question, correctAnswer, userAnswer }) => {
  
  const isCorrect = userAnswer === correctAnswer

  return (
    <div className={`result-card ${isCorrect ? 'correct' : 'incorrect'}`}>
      <p><strong>Question:</strong> {question}</p>
      <p>
        <strong>Your Answer:</strong> {userAnswer || 'No answer'}
      </p>
      <p>
        <strong>Correct Answer:</strong> {correctAnswer}
      </p>
    </div>
  )
}

ResultCard.propTypes = {
  question: PropTypes.string.isRequired,
  correctAnswer: PropTypes.string.isRequired,
  userAnswer: PropTypes.string
}

export default ResultCard
