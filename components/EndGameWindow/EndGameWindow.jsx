import React from 'react';
import './EndGameWindow.scss';

import { MAX_GAME_VALUE } from '../../constants/utilities';
import { BtnRestartGame } from '../BtnRestartGame/BtnRestartGame';
import ImageEndGameSrc from './assets/birdsEngGame.jpg';

export const EndGameWindow = ({ scoreValue, restartGame }) => {
  return scoreValue === MAX_GAME_VALUE ? (
    <div className="bg-primary text-center text-white mt-3 pt-2 pr-2 pb-2 pl-2">
      <h2 className="text-white mt-2 ml-3">Чирик!</h2>
      <p>Вы настоящий орнитолог!</p>
      <img
        className="end-game__image"
        src={ImageEndGameSrc}
        alt="end game success"
      />
    </div>
  ) : (
    <div className="bg-primary text-center text-white mt-3 pt-5 pr-3 pb-4 pl-3">
      <h2 className="text-white mt-2 ml-3">Поздравляем!</h2>
      <p>
        Вы прошли викторину и набрали {scoreValue} из {MAX_GAME_VALUE} возможных
        баллов
      </p>
      <BtnRestartGame restartGame={restartGame} />
    </div>
  );
};
