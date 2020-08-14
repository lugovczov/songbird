import React, { useState, useEffect } from 'react';
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
import randomInteger from '../constants/utilities';
import { BtnNextLevel } from '../components/BtnNextLevel/BtnNextLevel';
import { SelectedAnswerItemContainer } from '../components/SelectedAnswerItemContainer/SelectedAnswerItemContainer';
import { BtnsAnswerContainer } from '../components/BtnsAnswerContainer/BtnsAnswerContainer';
import { CurrentQuestionContainer } from '../components/CurrentQuestionContainer/CurrentQuestionContainer';
import successAudioSrc from './assets/success.mp3';

export const App = () => {
  const [dataSection, setDataSection] = useState(0);
  const [sectionNames, setSectionNames] = useState(dataSectionNames);
  const [currentData, setCurrentData] = useState();
  const [currentQuestionItem, setCurrentQuestionItem] = useState();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState();
  const [scoreValue, setScoreValue] = useState(0);
  const [trueAnswer, setTrueAnswer] = useState(false);
  const [selectedAnswerBtnItem, setSelectedAnswerBtnItem] = useState();

  useEffect(() => {
    data ? setCurrentData(data[dataSection]) : null;
  }, [data, dataSection]);

  useEffect(
    () => {
      if (currentData) {
        const randNumber = randomInteger(0, currentData.length - 1);
        setCurrentQuestionItem(currentData[randNumber]);
        setCurrentQuestionIndex(randNumber);
      }
    },
    currentData,
    dataSection
  );
  const successAudio = new Audio();
  successAudio.src = successAudioSrc;

  useEffect(() => {
    if (
      currentQuestionIndex &&
      currentQuestionIndex === selectedAnswerBtnItem
    ) {
      setTrueAnswer(true);
      successAudio.play();
    }
  }, [currentQuestionIndex, selectedAnswerBtnItem]);

  const setNextLevel = () => {
    if (dataSection !== data.length) {
      setDataSection(dataSection + 1);
      setTrueAnswer(false);
      setSelectedAnswerBtnItem(false);
    }
  };

  // TODO: logic for summary score
  // TODO: modal after game
  // TODO: fix audio play
  return (
    <div className="app bg-dark">
      <div className="app-wrapper">
        <Header scoreValue={scoreValue} />
        <Navbar
          sectionNames={sectionNames}
          dataSection={dataSection}
          setDataSection={setDataSection}
        />

        {currentQuestionItem ? (
          <>
            <CurrentQuestionContainer
              currentQuestionItem={currentQuestionItem}
              trueAnswer={trueAnswer}
            />
            <div className="answer-container d-flex">
              <BtnsAnswerContainer
                currentData={currentData}
                setSelectedAnswerBtnItem={setSelectedAnswerBtnItem}
              />
              <SelectedAnswerItemContainer
                currentQuestionItem={currentData[selectedAnswerBtnItem]}
              />
            </div>
          </>
        ) : null}
        <BtnNextLevel setNextLevel={setNextLevel} trueAnswer={trueAnswer} />
      </div>
    </div>
  );
};

const AppWithHot = hot(module)(App);

const mountNode = document.getElementById('app');
ReactDOM.render(<AppWithHot name="Uladzimir" />, mountNode);
