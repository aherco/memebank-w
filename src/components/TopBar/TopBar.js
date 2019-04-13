import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './TopBar.css';

export default class TopBar extends Component {
  render() {

    const gcname = [
      <span id='tb-guild'>&nbsp;~{this.props.guild}</span>,
      <span id='tb-channel'>#{this.props.channel}</span>,
    ];

    return (
      <div className='TopBar'>
        <span id='tb-logo'>
          meme<span id='tb-logo2'>bank</span>
          {this.props.bank ? gcname : null}
        </span>
      </div>
    );
  }
}

TopBar.propTypes = {
  guild: PropTypes.string,
  channel: PropTypes.string,
  bank: PropTypes.bool,
};
