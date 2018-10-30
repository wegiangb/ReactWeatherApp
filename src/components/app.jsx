import React from 'react';
import PropTypes from 'prop-types';
import Axios from 'axios';
import '../styles/app.scss';

import LocationDetails from './location-details';
import ForecastSummaries from './forecast-summaries';
import ForecastDetails from '../components/forecast-details';
import SearchForm from './searchForm';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDate: 0,
      forecasts: [],
      location: {
        city: "",
        country: "",
      }
    };
    this.handleForecastSelect = this.handleForecastSelect.bind(this);
  }

  componentDidMount() {
    Axios.get('https://mcr-codes-weather.herokuapp.com/forecast?city=Penzance').then((response) => {
      this.setState({
        forecasts: response.data.forecasts,
        location: {
          city: response.data.location.city,
          country: response.data.location.country,
        },
      });
    });
  }

  handleForecastSelect(date) {
    this.setState({
      selectedDate: date,
    });
  }


  render() {
    const selectedForecast =
    this.state.forecasts.find(forecast => forecast.date === this.state.selectedDate);
    return (
      <div>
        <LocationDetails
          city={this.state.location.city}
          country={this.state.location.country}
        />
        <SearchForm />
        <ForecastSummaries onForecastSelect={this.handleForecastSelect} forecasts={this.state.forecasts} />
        {
          selectedForecast && <ForecastDetails forecast={selectedForecast} />
        }
      </div>
    );
  }
}


export default App;
