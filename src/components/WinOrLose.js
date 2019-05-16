import React from "react";
import PropTypes from "prop-types";

const WinOrLose = ({ answer, win, lose }) => {
  let str = "";
  if (answer) {
    if (win) {
      str = "Congratulations, you got it";
    } else if (lose) {
      str = "Sorry, better luck next time";
    }

    return (
      <div>
        <h2>{str}</h2>
      </div>
    );
  }
  return <div />;
};

WinOrLose.propTypes = {
  win: PropTypes.bool.isRequired,
  lose: PropTypes.bool.isRequired
};

export default WinOrLose;
