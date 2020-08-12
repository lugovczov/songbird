import React from 'react';

export const BtnNextLevel = ({ setNextLevel }) => {
  return (
    <button
      type="button"
      className="btn btn-success btn-block mt-3"
      onClick={setNextLevel}
    >
      Next
    </button>
  );
};
