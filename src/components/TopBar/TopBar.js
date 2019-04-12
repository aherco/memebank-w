import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './TopBar.css';

export default class TopBar extends Component {
  render() {
    return (
      <div className='TopBar'>
        <span id='tb-logo'>
          meme<span id='tb-logo2'>bank  </span>
          <span id='tb-guild'>&nbsp;~{this.props.guild}</span>
          <span id='tb-channel'>#{this.props.channel}</span>
        </span>
      </div>
    );
  }
}

TopBar.propTypes = {
  guild: PropTypes.string.isRequired,
  channel: PropTypes.string.isRequired,
};
