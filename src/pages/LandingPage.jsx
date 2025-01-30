import { Link } from 'react-router'

function LandingPage() {
  return (
    <div className='container'>
      <h1>Welcome to the Quiz Game!</h1>
      <h3>Welcome to the Trivia Challenge!</h3>
      <p>You will be presented with 10 True or False questions.</p>
      <p>Can you score 5/10 or higher?</p>
      <Link to='/quiz/0' className='btn btn-first'>
        Start Quiz
      </Link>
    </div>
  )
}

export default LandingPage
