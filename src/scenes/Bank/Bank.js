import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import BankStackGrid from '../../components/BankStackGrid/BankStackGrid.js';

class Bank extends Component {
  componentDidMount() {
    this.props.getItems(this.props.match.params.id);
  }

  render() {
    return (
      <div className='Bank'>
        <BankStackGrid/>
      </div>
    );
  }
}

Bank.propTypes = {
  getItems: PropTypes.func.isRequired,
};

export default withRouter(Bank);
