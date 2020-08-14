import React from 'react';

export const BtnNextLevel = ({ setNextLevel, trueAnswer }) => {
  return trueAnswer ? (
    <button
      type="button"
      className="btn btn-success btn-block mt-3"
      onClick={() => setNextLevel()}
    >
      Next
    </button>
  ) : (
    <button type="button" className="btn btn-success btn-block mt-3 disabled">
      Next
    </button>
  );
};
