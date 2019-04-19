import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TopBar from '../TopBar/TopBar.js';

import './WindowBox.css';

export default class WindowBox extends Component {
  render() {
    return (
      <div id={this.props.id} className='WindowBox'>
	<TopBar white={this.props.white} pink={this.props.pink}/>
	<div className='wb-content'>
          {this.props.children}
	</div>
      </div>
    );
  }
}

WindowBox.propTypes = {
  id: PropTypes.string,
  white: PropTypes.string,
  pink: PropTypes.string,
};
