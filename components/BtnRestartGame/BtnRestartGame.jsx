import React from 'react';

export const BtnRestartGame = ({ restartGame }) => {
  return (
    <button
      type="button"
      className="btn btn-success btn-block mt-5"
      onClick={() => restartGame()}
    >
      Попробовать ещё раз!
    </button>
  );
};
