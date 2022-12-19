import React, { useState } from 'react';
import server from '../../config/service';
import {Link} from 'react-router-dom';
import data from '../../constants/data.json';

class Posting extends React.Component {

 state = {
    data: [],
  };

  componentDidMount() {
    fetch('/data.json')
      .then(response => response.json())
      .then(data => {
        this.setState({ data });
      });
  }

  render() {
    const { data } = this.state;
    return (
      <div>
        {data.map(item => (
          <p key={item.id}>{item.tag}</p>
        ))}
      </div>
    );
  }
}

export default Posting;