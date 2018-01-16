import React, { Component } from 'react';
import Question from './Components/Question/Question';
import Result from './Components/Result/Result';
import { Button } from 'react-bootstrap';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.calculateScore = this.calculateScore.bind(this);
    this.nextQuestion = this.nextQuestion.bind(this);
    this.state = {
      score: 0,
      questionCounter: 0,
      questions: [
        {
          id: 1,
          text: 'Ko od navedenih sportista nije fudbaler?',
          answers:
            [
              { text: 'Lionel Mesi', isCorrect: false },
              { text: 'Ronaldo', isCorrect: false },
              { text: 'Majkl Felps', isCorrect: true },
              { text: 'Nejmar', isCorrect: false }
            ]
        },
        {
          id: 2,
          text: 'Glavni grad Portugala je:',
          answers:
            [
              { text: 'Madrid', isCorrect: false },
              { text: 'Bratislava', isCorrect: false },
              { text: 'Dablin', isCorrect: false },
              { text: 'Lisabon', isCorrect: true }
            ]
        },
        {
          id: 3,
          text: 'Ko je komponovao operu Carobna frula?',
          answers:
            [
              { text: 'Volfgang Amadeus Mocart', isCorrect: true },
              { text: 'Antonio Vivaldi', isCorrect: false },
              { text: 'Djuzepe Verdi', isCorrect: false },
              { text: 'Johan Sebastijan Bah', isCorrect: false }
            ]
        },
        {
          id: 4,
          text: 'Ko od navedenih sportista nije fudbaler?',
          answers:
            [
              { text: 'Lionel Mesi', isCorrect: false },
              { text: 'Ronaldo', isCorrect: false },
              { text: 'Majkl Felps', isCorrect: true },
              { text: 'Nejmar', isCorrect: false }
            ]
        },
        {
          id: 5,
          text: 'Glavni grad Portugala je:',
          answers:
            [
              { text: 'Madrid', isCorrect: false },
              { text: 'Bratislava', isCorrect: false },
              { text: 'Dablin', isCorrect: false },
              { text: 'Lisabon', isCorrect: true }
            ]
        },
        {
          id: 6,
          text: 'Ko je komponovao operu Carobna frula?',
          answers:
            [
              { text: 'Volfgang Amadeus Mocart', isCorrect: true },
              { text: 'Antonio Vivaldi', isCorrect: false },
              { text: 'Djuzepe Verdi', isCorrect: false },
              { text: 'Johan Sebastijan Bah', isCorrect: false }
            ]
        },
      ]
    }
  }

  // calculateScore() {
  //   let score = this.state.score;
  //   if(this.state.questionCounter < this.state.questions.length-1) {
  //     score++;
  //     this.setState({ score: score });
  //     console.log(this.state.questionCounter);
  //   }
  // }

  calculateScore() {
    let score = this.state.score;
    score++;
    this.setState({ score: score });
  }

  // nextQuestion() {
  //   let currentQuestion = this.state.questionCounter;
  //   if(currentQuestion < this.state.questions.length-1) {
  //     currentQuestion++;
  //     this.setState({questionCounter: currentQuestion});
  //   }
  // }

  nextQuestion() {
    let currentQuestion = this.state.questionCounter;
    currentQuestion++;
    this.setState({questionCounter: currentQuestion});
  }

  isEnded() {
    return this.state.questionCounter === this.state.questions.length;
  }

  render() {
    return(
      <div>
        <div className="quiz-header text-center">
          <h2>React Quiz</h2>
        </div>
        <div className="container">
          {
            this.isEnded() === true &&
              <Result score={this.state.score} />
          }
          {
            this.isEnded() === false &&
              <div>
                <Question
                  questionText={this.state.questions[this.state.questionCounter].text}
                  answers={this.state.questions[this.state.questionCounter].answers}
                  key={this.state.questions[this.state.questionCounter].id}
                  calculateScore={this.calculateScore}
                  nextQuestion={this.nextQuestion} />
                <hr />
                <h3 className="numerator">Pitanje {this.state.questionCounter+1} od {this.state.questions.length}</h3>
              </div>
          }
        </div>
      </div>
    )
  }
}

export default App;
