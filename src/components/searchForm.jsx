import React from 'react';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: "",

    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    console.log(event.target.value);
    this.state.searchText = event.target.value;
  }

  render() {
    return (
      <React.Fragment>
        <button>Search</button>
        <input type="text" onChange={this.handleInputChange} value={this.state.searchText} />
      </React.Fragment>
    );
  }
}


export default SearchForm;
