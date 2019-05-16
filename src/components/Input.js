import React from "react";
import PropTypes from "prop-types";

const Input = ({ answer, guesses, checkCorrect }) => {
  if (answer) {
    return (
      <div>
        <input onChange={checkCorrect} />
        <p id="correctGuesses">{guesses}</p>
      </div>
    );
  }
  return <div />;
};

Input.propTypes = {
  answer: PropTypes.string.isRequired,
  guesses: PropTypes.string.isRequired,
  checkCorrect: PropTypes.func.isRequired
};

export default Input;
