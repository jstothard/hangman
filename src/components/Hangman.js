import React from "react";
import PropTypes from "prop-types";

const hangTurn = [
  [3, 3, 3, 3, 3],
  [2, 0, 0, 4, 0],
  [2, 0, 0, 5, 0],
  [2, 0, 7, 6, 8],
  [2, 0, 0, 6, 0],
  [2, 0, 9, 0, 10],
  [1, 1, 1, 1, 1]
];
const hangMan = [
  ["_", "_", "_", "_", "_"],
  ["|", "", "", " | ", ""],
  ["|", "", "", "😄", ""],
  ["|", "", "\\", "|", "/"],
  ["|", "", "", "|", ""],
  ["|", "", "/", "", "\\"],
  ["_", "_", "_", "_", "_"]
];

const Hangman = ({ guesses }) => {
  let currTable = hangMan.map((row, j) => {
    return (
      <tr>
        {row.map((cell, i) => {
          if (hangTurn[j][i] <= guesses) {
            if (guesses === 10 && j === 2 && i === 3) {
              return <td>💀</td>;
            }
            return <td>{cell}</td>;
          }
          return <td />;
        })}
      </tr>
    );
  });

  return <table>{currTable}</table>;
};

Hangman.propTypes = {
  guesses: PropTypes.number.isRequired
};

export default Hangman;
