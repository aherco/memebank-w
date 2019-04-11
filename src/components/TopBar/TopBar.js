import React, { Component } from 'react';
import './TopBar.css';

export default class TopBar extends Component {
  render() {
    return (
      <div className='TopBar'>
        <span id='tb-logo'>meme<span id='tb-logo2'>bank</span></span>
      </div>
    );
  }
}
