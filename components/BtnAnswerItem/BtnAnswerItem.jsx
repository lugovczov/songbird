import React from 'react';

export const BtnAnswerItem = ({ name, value, checkTrueAnswer }) => {
  return (
    <button
      type="button"
      className="btn btn-primary btn-block text-left mt-1"
      value={value}
      onClick={() => checkTrueAnswer(+event.target.value)}
    >
      {name}
    </button>
  );
};
