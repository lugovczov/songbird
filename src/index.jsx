import React from 'react';
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader';

import './index.scss';

import 'core-js/stable';
import 'regenerator-runtime/runtime';

export const App = () => {
  return <h1 className="test">React App</h1>;
};

const AppWithHot = hot(module)(App);

const mountNode = document.getElementById('app');
ReactDOM.render(<AppWithHot name="Uladzimir" />, mountNode);
