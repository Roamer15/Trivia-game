import PropTypes from 'prop-types'

function ListQuestions ({ currentQuestion, question, onAnswer, questionLength }) {
  return (
    <div className='container'>
      <div className='question-container'>
        <h1>
          Question {currentQuestion + 1} of {questionLength}
        </h1>
        <p>{question}</p>
        <div className='btn-box'>
          <button className='btn btn-success' onClick={() => onAnswer('True')}>
            True
          </button>
          <button className='btn btn-failure' onClick={() => onAnswer('False')}>
            False
          </button>
        </div>
      </div>
      {/* <div className="timer">Time left: {timeLeft} seconds</div> */}
    </div>
  )
}

ListQuestions.propTypes = {
  question: PropTypes.string.isRequired, // The question text
  onAnswer: PropTypes.func.isRequired, // Function to handle user's answer
  currentQuestion: PropTypes.number.isRequired,
  questionLength: PropTypes.number.isRequired
}

export default ListQuestions
