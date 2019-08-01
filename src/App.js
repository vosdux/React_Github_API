import React, { Component } from 'react';

import Title from './Components/Title/Title';
import DataList from './Components/DataList/DataList';
import Input from './Components/Input/Input';
import './App.css';

const BASE_PATH = 'https://api.github.com/users/';

class App extends Component {
  state = {
    query: 'vosdux',
    result: {}
  }

  componentDidMount() {
    const { query } = this.state;
    this.fetchData(query);
  }

  fetchData(query) {
    fetch(`${BASE_PATH}${query}`)
      .then(res => res.json())
      .then(result => this.setData(result))
      .catch(error => error);
  }

  setData(result) {
    this.setState({
      result
    })
  }

  handleInputChange({ target: value }) {
    this.setState({
      query: value
    })
  }

  onKeyPress( {key} ) {
    if (key === 'Enter') {
      const { query } = this.state;
      this.fetchData(query);
    }
  }

  render() {
    const { result, query } = this.state;
    console.log(result);
    return (
      <div className="wrapper">
        <Title />
        <Input 
          onChange={this.handleInputChange}
          value={query}
          onKeyPress={this.onKeyPress}/>
        <DataList result={result}/>
      </div>
    );
  }
};

export default App;
