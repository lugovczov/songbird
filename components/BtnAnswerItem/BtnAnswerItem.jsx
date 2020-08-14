import React from 'react';

export const BtnAnswerItem = ({ name, value, setSelectedAnswerBtnItem }) => {
  return (
    <button
      type="button"
      className="btn btn-primary btn-block text-left mt-1"
      value={value}
      onClick={() => setSelectedAnswerBtnItem(+event.target.value)}
    >
      {name}
    </button>
  );
};
