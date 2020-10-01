import React, { Component } from 'react'


class QuizQuestionButton extends Component {

  handleClick(button_text){
    this.props.clickHandler(button_text)
    if (button_text == his.props.quiz_question.answer) {
      this.props.showNextQuestionHandler()
    }
  }

  render(){
    return(
      <li><button onClick={this.handleClick.bind(this)}>{this.props.button_text}</button></li>
    )
  }
}

export default QuizQuestionButton
