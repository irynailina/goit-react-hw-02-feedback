import React from "react";
import Notification from "../Notification/Notification";
import PropTypes from "prop-types";
import styles from './statistics.module.css'

const Statistics = ({ good, neutral, bad, total, positiveFeedback }) => (
  <>
    <h3 className={styles.stat}>Statistics</h3>
    {good || neutral || bad ? (
      <>
        <p className={styles.good}>Good: {good}</p>
        <p className={styles.neutral}>Neutral: {neutral}</p>
        <p className={styles.bad}>Bad: {bad} </p>
        <p className={styles.total}>Total: {total}</p>
        <p className={styles.positive}>Positive feedback: {positiveFeedback}%</p>
      </>
    ) : (
      <Notification message="No feedback given :(" />
    )}
  </>
);

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positiveFeedback: PropTypes.number,
};
