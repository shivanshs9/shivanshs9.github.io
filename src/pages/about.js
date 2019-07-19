import React, { Component } from 'react';

import './about.scss';

class AboutPage extends Component {
  constructor(props) {
    super(props);
    this.data = this.props.data;
  }

  render() {
    console.log(this.data)
    return (
      <p>about</p>
    );
  }
}


export default AboutPage;
