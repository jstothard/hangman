import React from "react";
import PropTypes from "prop-types";

const Letters = ({ guesses }) => {
  return (
    <div>
      <p id="guessed">{guesses}</p>
    </div>
  );
};

Letters.propTypes = {
  guesses: PropTypes.string.isRequired
};

export default Letters;
