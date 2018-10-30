import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

const ForecastDetails = (props) => (
  <span className="forecast">
    <div className="forecast-summary__date">{moment(props.forecast.date).format('ddd Do MMM') }</div>
    <div className="forecast-summary__temperature__max">{props.forecast.temperature.max}</div>
    <div className="forecast-summary__description__min">{props.forecast.temperature.min}</div>
    <div className="forecast-summary__humidity">{props.forecast.humidity}</div>
    <div className="forecast-summary__windspeed">{props.forecast.wind.speed}</div>
    <div className="forecast-summary__direction">{props.forecast.wind.direction}</div>
  </span>
);
export default ForecastDetails;
