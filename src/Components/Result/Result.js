import React, { Component } from 'react';
import './Result.css';

class Result extends Component {
  render() {
    return(
      <div>
        <div className="panel panel-info">
          <div className="panel-heading">
            <h2 className="text-center">Rezultat</h2>
          </div>
          <div className="panel-body">
            <h3 className="text-center">Osvojeni poeni: {this.props.score}</h3>
          </div>
        </div>
      </div>
    )
  }
}

export default Result;
