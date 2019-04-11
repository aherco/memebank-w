import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Card.css';

export default class Card extends Component {
  render() {
    const img = <img alt='' src={this.props.src}/>;
    return (
      <div className='Card'>
        {img}
      </div>
    );
  }
}

Card.propTypes = {
  src: PropTypes.string.isRequired,
};
