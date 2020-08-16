import React from 'react';
import './BtnsAnswerContainer.scss';
import { BtnAnswerItem } from '../BtnAnswerItem/BtnAnswerItem';

export const BtnsAnswerContainer = ({ currentData, checkTrueAnswer }) => {
  return (
    <div className="mt-3 d-flex flex-column btns-answer-container">
      {currentData.map((el, index) => {
        return (
          <BtnAnswerItem
            name={el.name}
            value={index}
            checkTrueAnswer={checkTrueAnswer}
            key={`btn_answer-${index}`}
          />
        );
      })}
    </div>
  );
};
