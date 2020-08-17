import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader';

import 'bootswatch/dist/lux/bootstrap.min.css';
import './index.scss';

import 'core-js/stable';
import 'regenerator-runtime/runtime';

import data from '../constants/birdsData';
import dataSectionNames from '../constants/dataSectionNames';
import Navbar from '../components/Navbar/Navbar';
import Header from '../components/Header/Header';
import randomInteger, { MAX_CURRENT_SCORE } from '../constants/utilities';
import { BtnNextLevel } from '../components/BtnNextLevel/BtnNextLevel';
import { SelectedAnswerItemContainer } from '../components/SelectedAnswerItemContainer/SelectedAnswerItemContainer';
import { BtnsAnswerContainer } from '../components/BtnsAnswerContainer/BtnsAnswerContainer';
import { CurrentQuestionContainer } from '../components/CurrentQuestionContainer/CurrentQuestionContainer';
import successAudioSrc from './assets/success.mp3';
import failAudioSrc from './assets/fail.mp3';
import { EndGameWindow } from '../components/EndGameWindow/EndGameWindow';

export const App = () => {
  const [dataSection, setDataSection] = useState(0);
  const [sectionNames, setSectionNames] = useState(dataSectionNames);
  const [currentData, setCurrentData] = useState();
  const [currentQuestionItem, setCurrentQuestionItem] = useState();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState();
  const [scoreValue, setScoreValue] = useState(0);
  const [trueAnswer, setTrueAnswer] = useState(false);
  const [selectedAnswerBtnItem, setSelectedAnswerBtnItem] = useState();
  const [scoreCurrent, setScoreCurrent] = useState(MAX_CURRENT_SCORE);
  const [visibleEndGameWindow, setVisibleEndGameWindow] = useState(false);

  useEffect(() => {
    data ? setCurrentData(data[dataSection]) : null;
  }, [data, dataSection]);

  useEffect(() => {
    if (currentData) {
      const randNumber = randomInteger(0, currentData.length - 1);
      setCurrentQuestionItem(currentData[randNumber]);
      setCurrentQuestionIndex(randNumber);
    }
  }, [currentData, dataSection]);

  const playerRef = useRef();
  useEffect(() => {
    if (trueAnswer) {
      playerRef.current.audio.current.pause();
    }
  }, [trueAnswer]);

  const successAudio = new Audio(successAudioSrc);
  const failAudio = new Audio(failAudioSrc);

  const checkTrueAnswer = (currentIndex) => {
    setSelectedAnswerBtnItem(currentIndex);
    if (trueAnswer) {
      return;
    }
    if (currentQuestionIndex === currentIndex) {
      setTrueAnswer(true);
      successAudio.play();
      setScoreValue(scoreValue + scoreCurrent);
    } else {
      scoreCurrent > 0 ? setScoreCurrent(scoreCurrent - 1) : null;
      failAudio.play();
    }
  };

  const setNextLevel = () => {
    if (dataSection === data.length - 1) {
      setVisibleEndGameWindow(true);
    } else {
      setDataSection(dataSection + 1);
      setTrueAnswer(false);
      setSelectedAnswerBtnItem(false);
      setScoreCurrent(MAX_CURRENT_SCORE);
    }
  };

  const restartGame = () => {
    setCurrentData(data[0]);
    setDataSection(0);
    setScoreValue(0);
    setScoreCurrent(MAX_CURRENT_SCORE);
    setTrueAnswer(false);
    setVisibleEndGameWindow(false);
    setSelectedAnswerBtnItem();
  };

  return (
    <div className="app bg-dark">
      <div className="app-wrapper">
        <Header scoreValue={scoreValue} />
        <Navbar
          sectionNames={sectionNames}
          dataSection={dataSection}
          setDataSection={setDataSection}
        />
        {visibleEndGameWindow ? (
          <EndGameWindow scoreValue={scoreValue} restartGame={restartGame} />
        ) : currentQuestionItem ? (
          <>
            <CurrentQuestionContainer
              currentQuestionItem={currentQuestionItem}
              trueAnswer={trueAnswer}
              playerRef={playerRef}
            />
            <div className="answer-container d-flex">
              <BtnsAnswerContainer
                currentData={currentData}
                trueAnswer={trueAnswer}
                checkTrueAnswer={checkTrueAnswer}
                currentQuestionIndex={currentQuestionIndex}
              />
              <SelectedAnswerItemContainer
                currentQuestionItem={currentData[selectedAnswerBtnItem]}
              />
            </div>
            <BtnNextLevel setNextLevel={setNextLevel} trueAnswer={trueAnswer} />
          </>
        ) : null}
      </div>
    </div>
  );
};

const AppWithHot = hot(module)(App);

const mountNode = document.getElementById('app');
ReactDOM.render(<AppWithHot name="Uladzimir" />, mountNode);
