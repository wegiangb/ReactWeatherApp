import 'raf/polyfill';
import React, { Component } from 'react';
import { render } from 'react-dom';
import App from './components/app';
import ForecastDetails from './components/forecast-details';

render(<App />, document.getElementById('root'));
