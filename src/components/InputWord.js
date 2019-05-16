// import React from "react";
// import PropTypes from "prop-types";

// const InputWord = ({ answer, updateAnswer }) => {

// InputWord.propTypes = {
//   answer: PropTypes.string.isRequired,
//   updateAnswer: PropTypes.func.isRequired
// };

// export default InputWord;

import React, { Component } from "react";

class InputWord extends Component {
  state = {
    textBox: ""
  };
  render() {
    const { answer } = this.props;
    if (answer === "") {
      return (
        <form>
          <input
            type="text"
            onChange={this.onChange}
            value={this.state.textBox}
          />
          <button onClick={this.updateAnswer}>Add word</button>
        </form>
      );
    }
  }

  onChange = event => {
    this.setState({
      textBox: this.state.textBox + event.target.value
    });
  };
}

export default InputWord;
