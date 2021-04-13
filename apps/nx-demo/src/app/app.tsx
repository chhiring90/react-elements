import React, { Component, useState } from 'react';
import Button from './Components/UI/Button/button';
import Dropdown from './Components/UI/Dropdown/dropdown';
import uuid from 'react-uuid';

class App extends React.Component {
  state = {
    location: [
      {
        id: uuid(),
        title: 'New York',
        selected: false,
        key: 'location',
      },
      {
        id: uuid(),
        title: 'Dublin',
        selected: false,
        key: 'location',
      },
      {
        id: uuid(),
        title: 'California',
        selected: false,
        key: 'location',
      },
      {
        id: uuid(),
        title: 'Istanbul',
        selected: false,
        key: 'location',
      },
      {
        id: uuid(),
        title: 'Izmir',
        selected: false,
        key: 'location',
      },
      {
        id: uuid(),
        title: 'Oslo',
        selected: false,
        key: 'location',
      },
    ],
  };

  resetThenSet(id, key) {
    const temp = [...this.state[key]];

    temp.forEach((item) => (item.selected = false));
    temp[id].selected = true;

    this.setState({
      [key]: temp,
    });
  }

  render() {
    return (
      <div>
        <Dropdown options={this.state.location} title="Select Location" />
      </div>
    );
  }
}

export default App;
