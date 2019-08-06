import React, { Component } from 'react';

import Title from './Components/Title/Title';
import DataList from './Components/DataList/DataList';
import Input from './Components/Input/Input';

import './Fonts.css';
import './App.css';


const BASE_PATH = 'https://api.github.com/users/';


class App extends Component {
  constructor() {
    super()
    this.handleInputChange = this.handleInputChange.bind(this);
    this.onKeyPress = this.onKeyPress.bind(this);
  }
  state = {
    query: '',
    result: {},
    status: ''
  }

  fetchData(query) {
    fetch(`${BASE_PATH}${query}`)
      .then(res => res.json())
      .then(result => this.setData(result))
      .catch(error => error);
  }

  setData(result) {
    console.log(result);
    this.setState({
      result
    })
  }

  handleInputChange({ target: { value } }) {
    this.setState({
      query: value
    });
  }

  onKeyPress( {key} ) {
    if (key === 'Enter') {
      const { query } = this.state;
      this.fetchData(query);
    }
  }

  render() {
    const { result } = this.state;
    return (
      <div className="wrapper">
        <Title />
        <Input 
          onChange={this.handleInputChange}
          onKeyPress={this.onKeyPress}/>
        <DataList result={result}/>
      </div>
    );
  }
};

export default App;
