import React from 'react';
import PropTypes from 'prop-types';
import WeatherIcon from 'react-icons-weather';
import moment from 'moment';

const ForecastSummary = props => (
  <span>
    <div className="forecast-summary__date">{moment(props.date).format('ddd Do MMM') }
    </div>
    <div className="forecast-summary__temperature">{props.temperature}</div>
    <div className="forecast-summary__description">{props.description}</div>
    <div className="forecast-summary__icon">
      <WeatherIcon name="owm" iconId={props.icon} />
    </div>

    <button onClick={() => props.onSelect(props.date)}>More Details</button>;
  </span>

);


export default ForecastSummary;
