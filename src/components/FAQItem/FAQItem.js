import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import './FAQItem.css';

export default class FAQItem extends PureComponent {
  render() {
    return (
      <div className='FAQItem'>
        <p>q: {this.props.q}</p>
	<p>{this.props.a}</p>
      </div>
    );
  }
}

FAQItem.propTypes = {
  q: PropTypes.string.isRequired,
  a: PropTypes.string.isRequired,
};
