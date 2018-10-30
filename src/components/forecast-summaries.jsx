import React from 'react';
import PropTypes from 'prop-types';
import ForecastSummary from './forecast-summary';
import '../styles/forecast-summaries.scss';

const ForecastSummaries = (props) => (
  <div className="forecast-summaries">
    {
      props.forecasts.map((forecast) => (
        <ForecastSummary
          onSelect={props.onForecastSelect}
          key={forecast.date}
          date={forecast.date}
          description={forecast.description}
          icon={forecast.icon}
          temperature={forecast.temperature.max}
        />
      ))
    }
  </div>
);

ForecastSummaries.propTypes = {
  forecasts: PropTypes.arrayOf(PropTypes.shape({
    date: PropTypes.number,
    description: PropTypes.string,
    icon: PropTypes.string,
    temperature: PropTypes.shape({
      max: PropTypes.number,
    }),
  })),
};

export default ForecastSummaries;
