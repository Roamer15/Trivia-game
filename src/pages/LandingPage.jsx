import NavigationButton from '../components/NavigationButton'

function LandingPage() {
    return (
        <>
        <h1>Welcome to TriviaMaster!</h1>
        <p>
        Dive into the exciting world of trivia with TriviaMaster! 
        Challenge yourself with hundreds of questions across various categories. 
        Test your knowledge, learn fun facts, and compete with friends to see who
        is the ultimate trivia master.
        </p>
        <div className='btns'>
           <NavigationButton text='Start Quiz' navigation='quiz'/>
           <NavigationButton text='Instructions' navigation='instructions'/>
        </div>
        </>
    )
}

export default LandingPage