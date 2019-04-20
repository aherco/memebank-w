import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './TopBar.css';

export default class TopBar extends PureComponent {
  render() {

    const gcname = [
      <span key={1} id='tb-guild'>&nbsp;~{this.props.guild}</span>,
      <span key={2} id='tb-channel'>#{this.props.channel}</span>,
    ];
    
    // if both are not defined set default
    let text;
    if (!this.props.white && !this.props.pink) {
      text = <span>meme<span id='tb-logo2'>bank</span></span>
    } else {
      text = <span>{this.props.white}<span id='tb-logo2'>{this.props.pink}</span></span>
    }

    return (
      <div className='TopBar'>
        <span id='tb-logo'>
	  {text}
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

