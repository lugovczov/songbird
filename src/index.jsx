import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader';

import 'bootswatch/dist/lux/bootstrap.min.css';
import './index.scss';

import 'core-js/stable';
import 'regenerator-runtime/runtime';

import data from '../constants/birdsData';
import dataSectionNames from '../constants/dataSectionNames';
import Navbar from '../components/Navbar/Navbar';

export const App = () => {
  const [dataSection, setDataSection] = useState(0);
  const [currentData, setCurrentData] = useState(data[setDataSection]);
  const [sectionNames, setSectionNames] = useState(dataSectionNames);
  return (
    <Navbar
      sectionNames={sectionNames}
      dataSection={dataSection}
      setDataSection={setDataSection}
    />
  );
};

const AppWithHot = hot(module)(App);

const mountNode = document.getElementById('app');
ReactDOM.render(<AppWithHot name="Uladzimir" />, mountNode);
