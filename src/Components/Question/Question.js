import React, { Component } from 'react';
import Answer from '../Answer/Answer';
import './Question.css';

class Question extends Component {

  constructor(props) {
    super(props);
    this.question = this.props.questionText;
    this.answers = this.props.answers;
  }

  render() {
    return(
      <div>
        <p className="text-center question">{this.question}</p>
        <div className="row">
          {
            this.answers.map((answer,index) => {
              return(
                <div className="col-md-6 text-center">
                  <Answer
                    answerText={answer.text}
                    key={index}
                    isAnswerCorrect={answer.isCorrect}
                    nextQuestion={this.props.nextQuestion}
                    calculateScore={this.props.calculateScore} />
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }
}

export default Question;
