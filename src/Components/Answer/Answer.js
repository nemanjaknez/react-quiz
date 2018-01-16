import React, { Component } from 'react';
import './Answer.css';

class Answer extends Component {

  constructor(props) {
    super(props);
    this.answer = this.props.answerText;
    this.isAnswerCorrect = this.props.isAnswerCorrect;
    this.checkAnswer = this.checkAnswer.bind(this);
  }

  checkAnswer(isAnswerCorrect) {
    if(isAnswerCorrect === true) {
      this.props.calculateScore();
    }
    this.props.nextQuestion();
  }

  render() {
    return(
      <p
        className="well"
        onClick={() => this.checkAnswer(this.isAnswerCorrect)} >
        {this.answer}
      </p>
    )
  }
}

export default Answer;
