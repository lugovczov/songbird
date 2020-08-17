import React from 'react';
import './BtnsAnswerContainer.scss';
import { BtnAnswerItem } from '../BtnAnswerItem/BtnAnswerItem';

export const BtnsAnswerContainer = ({
  currentData,
  trueAnswer,
  checkTrueAnswer,
  currentQuestionIndex,
}) => {
  return (
    <div className="mt-3 d-flex flex-column btns-answer-container">
      {currentData.map((el, index) => {
        return (
          <BtnAnswerItem
            name={el.name}
            value={index}
            trueAnswer={trueAnswer}
            checkTrueAnswer={checkTrueAnswer}
            currentQuestionIndex={currentQuestionIndex}
            key={`btn_answer-${index}`}
          />
        );
      })}
    </div>
  );
};
