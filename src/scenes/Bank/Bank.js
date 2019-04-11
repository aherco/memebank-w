import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import TopBar from '../../components/TopBar/TopBar.js';
import BankStackGrid from '../../components/BankStackGrid/BankStackGrid.js';

import './Bank.css';

class Bank extends Component {
  componentDidMount() {
    this.props.getItems(this.props.match.params.id);
  }

  render() {
    return (
      <div className='Bank'>
        <TopBar/>
        <div className='content'>
          <BankStackGrid/>
        </div>
      </div>
    );
  }
}

Bank.propTypes = {
  getItems: PropTypes.func.isRequired,
};

export default withRouter(Bank);
