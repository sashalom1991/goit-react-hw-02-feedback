import PropTypes from 'prop-types';
import './FeedbackOptions.css'

const FeedbackOptions = ({ onClickGood, onClickNeutral, onClickBad }) => {
    return (
        <>
        <button
            type="button"
            onClick={onClickGood}
            className="button"
        >Good
        </button>
          <button
            type="button"
            onClick={onClickNeutral}
            className="button"
        >Neutral
        </button>
        <button
            type="button"
            onClick={onClickBad}
            className="button"
        >Bad
        </button>
        </>
    )
}

FeedbackOptions.propTypes = {
  onClickGood: PropTypes.func.isRequired,
  onClickNeutral: PropTypes.func.isRequired,
  onClickBad: PropTypes.func.isRequired
}

export default FeedbackOptions