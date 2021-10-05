import PropTypes from 'prop-types';
import './Statistics.css';

const Statistics = ({ good, neutral, bad, total, percentage }) => {
    return (
       <>   <p className="text">Good: {good}</p>
            <p className="text">Neutral: {neutral}</p>
            <p className="text">Bad: {bad}</p>
            <p className="text">Total: {total}</p>
            <p className="text">Positive feedback: {percentage}%</p>     
        </>
    )
}

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    percentage: PropTypes.number.isRequired
}

export default Statistics;