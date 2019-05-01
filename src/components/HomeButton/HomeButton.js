import React, { PureComponent } from 'react';
import './HomeButton.css';

export default class HomeButton extends PureComponent {
  render() {
    return <input className='HomeButton' {...this.props}/>;
  }
}

HomeButton.defaultProps = {
  type: 'button',
};
