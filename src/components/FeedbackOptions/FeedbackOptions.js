import React from "react";
import PropTypes from 'prop-types';
import styles from './feedbackOptions.module.css'

const FeedbackOptions = ({onLeaveFeedback}) => (
  <>
    <button className={styles.good} name="good" onClick={onLeaveFeedback}>Good</button>
    <button className={styles.neutral} name="neutral" onClick={onLeaveFeedback}>Neutral</button>
    <button className={styles.bad} name="bad" onClick={onLeaveFeedback}>Bad</button>
  </>
);

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func
}
