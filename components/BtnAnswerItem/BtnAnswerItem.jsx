import React, { useState, useEffect } from 'react';
import {
  TRUE_INDICATION,
  FALSE_INDICATION,
  NONE_INDICATION,
} from '../../constants/utilities';
import './BtnAnswerItem.scss';

export const BtnAnswerItem = ({
  name,
  value,
  trueAnswer,
  checkTrueAnswer,
  currentQuestionIndex,
}) => {
  const [colorIndication, setColorIndication] = useState(NONE_INDICATION);
  const handleClick = (selectedIndex) => {
    checkTrueAnswer(selectedIndex);
    if (trueAnswer) {
      return;
    }
    if (selectedIndex === currentQuestionIndex) {
      setColorIndication(TRUE_INDICATION);
    } else {
      setColorIndication(FALSE_INDICATION);
    }
  };

  useEffect(() => {
    if (currentQuestionIndex) {
      return setColorIndication(NONE_INDICATION);
    }
  }, [currentQuestionIndex]);
  return (
    <button
      type="button"
      className="btn btn-primary btn-block text-left mt-1"
      value={value}
      onClick={() => handleClick(+event.target.value)}
    >
      {colorIndication === NONE_INDICATION ? (
        <span className="color-indicator"></span>
      ) : null}
      {colorIndication === TRUE_INDICATION ? (
        <span className="color-indicator color-indicator_true"></span>
      ) : null}
      {colorIndication === FALSE_INDICATION ? (
        <span className="color-indicator color-indicator_false"></span>
      ) : null}
      {name}
    </button>
  );
};
