import React, { Component } from 'react';

class About extends Component {
  componentDidMount() {
    document.title = 'Salviejo - About';
  }

  render() {
    return (
      <div>
        <div>This is about</div>
      </div>
    );
  }
}

export default About;
