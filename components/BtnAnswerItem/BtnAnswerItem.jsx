import React from 'react';

export const BtnAnswerItem = ({ name, checkTrueAnswer }) => {
  return (
    <button
      type="button"
      className="btn btn-primary btn-block text-left mt-1"
      onClick={checkTrueAnswer}
    >
      {name}
    </button>
  );
};
