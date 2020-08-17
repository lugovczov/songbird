import React from 'react';

export const BtnNextLevel = ({ setNextLevel, trueAnswer }) => {
  return trueAnswer ? (
    <button
      type="button"
      className="btn btn-success btn-block mt-3"
      onClick={() => setNextLevel()}
    >
      Далее
    </button>
  ) : (
    <button type="button" className="btn btn-success btn-block mt-3 disabled">
      Далее
    </button>
  );
};
