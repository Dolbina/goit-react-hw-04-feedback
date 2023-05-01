import PropTypes from 'prop-types';
import { Notification } from 'components/Notification/Notification';


export const Statistics = ({ good, neutral, bad, total= 0, positivePercentage= 0, }) => {
  return total === 0 ? (
    <Notification message="There is no feedback"></Notification>
  ) : (
    <div>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p>Positive feedback: {positivePercentage}%</p>
    </div>
  );
};

Statistics.protoType={
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
}