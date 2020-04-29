import React, { Component } from "react";

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    step: this.props.step,
    total: 0,
    positive: 0
  };

  handleGood = () => {
    this.setState(prev => {
      return {
        good: prev.good + this.state.step
      };
    });
    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
  };

  handleNeutral = () => {
    this.setState(prev => {
      return {
        neutral: prev.neutral + this.state.step
      };
    });
    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
  };

  handleBad = () => {
    this.setState(prev => {
      return {
        bad: prev.bad + this.state.step
      };
    });
    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
  };

  countPositiveFeedbackPercentage = () => {
    this.setState(() => {
      return {
        positive: Math.round((this.state.good * 100) / this.state.total)
      };
    });
  };

  countTotalFeedback = () => {
    this.setState(prev => {
      return { total: prev.total + this.state.step };
    });
  };

  render() {
    const { good, neutral, bad, total, positive } = this.state;
    return (
      <>
        <h2>Please leave feedback</h2>
        <button onClick={this.handleGood}>Good</button>
        <button onClick={this.handleNeutral}>Neutral</button>
        <button onClick={this.handleBad}>Bad</button>
        <h3>Statistics</h3>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad} </p>
        <p>Total: {total}</p>
        <p>Positive feedback: {`${positive}%`}</p>
      </>
    );
  }
}
