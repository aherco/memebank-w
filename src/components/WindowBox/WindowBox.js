import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TopBar from '../TopBar/TopBar.js';

import './WindowBox.css';

export default class WindowBox extends Component {
  render() {
    return (
      <div className='WindowBox'>
	<TopBar white={this.props.white} pink={this.props.pink}/>
        {this.props.children}
      </div>
    );
  }
}
