import React, {Component} from 'react';


class DateInput extends Component {
        constructor(props) {
          super(props);
          this.state = {
            text: null
          }
        };
  // Add a constructor with state
  handleChange = (event) => {
    this.setState({"date": event.target.value});
  }

  render() {
    return(
      <li className="cards-item">
        <div className="card">
          <div className="card-content">
            <div className="card-title">Number</div>
            <p className="card-text">
              <div className="input btn-block">
                <input type="date" className="dateInput" onChange={this.handleChange}/>
              </div>
              <div className="output">
                <label for="dateOutput">State: </label>
                <span name="dateOutput">{this.state.date}</span>
              </div>
            </p>
          </div>
        </div>
      </li>
    );
  }
}

export default DateInput;
