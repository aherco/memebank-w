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
	  {this.props.white}<span id='tb-logo2'>{this.props.pink}</span>
          {this.props.bank ? gcname : null}
        </span>
      </div>
    );
  }
}

TopBar.propTypes = {
  white: PropTypes.string,
  pink: PropTypes.string,
  guild: PropTypes.string,
  channel: PropTypes.string,
  bank: PropTypes.bool,
};

TopBar.defaultProps = {
  white: 'meme',
  pink: 'bank',
};
