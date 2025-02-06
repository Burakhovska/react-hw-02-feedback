// import PropTypes from 'prop-types';
// import data from '../../data.json';
import { StatSection, StatsList, StatsLi } from './Feedback.styled';
import { Component } from "react";




export class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  handleClickGood = () => {
    this.setState((prevState) => ({good: prevState.good +1}))
  }
  handleClickNeutral = () => {
    this.setState((prevState) => ({neutral: prevState.neutral +1}))
  }
  handleClickBad = () => {
    this.setState((prevState) => ({bad: prevState.bad +1}))
  }

  render() {
    return (      
    <StatSection className="statistics">
      <div className="title">Please leave feedback</div>
      <StatsList className="stat-list">
      <StatsLi className="item">
            <button 
            className="label"
            onClick={this.handleClickGood}>
              Good
            </button>
          </StatsLi>
          <StatsLi className="item">
            <button className="label"
            onClick={this.handleClickNeutral}>
            Neutral
            </button>
          </StatsLi>
          <StatsLi className="item">
            <button className="label"
            onClick={this.handleClickBad}>
            Bad
            </button>
          </StatsLi>
      </StatsList>
      <ul>
    <li>Good: {this.state.good}</li>
    <li>Neutral:{this.state.neutral}</li>
    <li>Bad:{this.state.bad}</li>
  </ul> 
    </StatSection>
 
  )

    }
  
}