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

export const App = () => {
  const [dataSection, setDataSection] = useState(0);
  const [sectionNames, setSectionNames] = useState(dataSectionNames);
  const [currentData, setCurrentData] = useState();
  const [currentQuestionItem, setCurrentQuestionItem] = useState();
  const [scoreValue, setScoreValue] = useState(0);

  useEffect(() => {
    data ? setCurrentData(data[dataSection]) : null;
  }, [data, dataSection]);

  useEffect(
    () => {
      if (currentData) {
        const randNumber = randomInteger(0, currentData.length - 1);
        setCurrentQuestionItem(currentData[randNumber]);
      }
    },
    currentData,
    dataSection
  );

  const setNextLevel = () => {
    dataSection !== data.length ? setDataSection(dataSection + 1) : null;
  };

  return (
    <div className="app bg-dark">
      <Header scoreValue={scoreValue} />
      <Navbar
        sectionNames={sectionNames}
        dataSection={dataSection}
        setDataSection={setDataSection}
      />
      {/* <CurrentQuestionContainer />
      <div className="answer-container">
        <BtnsAnswerContainer />
        <SelectedAnswerItemContainer />
      </div>
      <BtnNextLevel setNextLevel={setNextLevel} /> */}
    </div>
  );
};

const AppWithHot = hot(module)(App);

const mountNode = document.getElementById('app');
ReactDOM.render(<AppWithHot name="Uladzimir" />, mountNode);
