import React, { Component } from 'react'
//import quiz_data from './quiz_data.json'


let quizData = require('./quiz_data.json')

class Quiz extends Component {

  constructor(props){
    super(props)
    this.state = {
      quiz_position: 1
    }
  }

  render() {
    const instruction_text = this.instruction_text;
    return(
      <div>
        <div className="QuizQuestion">

        {
          quizData.instruction_text
        }

        </div>
      </div>
    )
  }
}

export default Quiz
