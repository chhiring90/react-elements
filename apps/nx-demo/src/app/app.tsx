import React, { Component } from 'react';
import Button from './Components/UI/Button/button';
import Dropdown from './Components/UI/DropdownHooks/DropdownMenu';
import uuid from 'react-uuid';

class App extends Component {
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

  resetThenSet(id: string | number, key: string | number) {
    const temp = [...this.state[key]];

    temp.forEach((item) => (item.selected = false));
    temp[id].selected = true;

    this.setState({
      [key]: temp,
    });
  }

  toggleItem(id: string | number, key: string | number) {
    console.log(this.state.location);
    const temp = [...this.state[key]];

    temp[id].selected = !temp[id].selected;

    this.setState({
      [key]: temp,
    });
  }

  render() {
    return (
      <div>
        {/* <Dropdown
          resetThenSet={this.resetThenSet}
          options={this.state.location}
          title="Select Location"
          toggleItem={this.toggleItem}
        /> */}
        <Dropdown />
      </div>
    );
  }
}

export default App;
