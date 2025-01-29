import PropTypes from "prop-types"
import { useNavigate } from 'react-router'

function NavigationButton({ text, navigation }) {

    const navigate = useNavigate()

    const redirectPage = (endpath) => {
        navigate(`/${endpath}`)
    }
    return (
        <button className='nav-btn' onClick={() => redirectPage(navigation)}>{text}</button>
    )
}

export default NavigationButton

NavigationButton.propTypes = {
    text: PropTypes.string,
    navigation: PropTypes.string
}