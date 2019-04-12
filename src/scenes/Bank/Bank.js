import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import TopBar from '../../components/TopBar/TopBar.js';
import BankStackGrid from '../../components/BankStackGrid/BankStackGrid.js';

import './Bank.css';

class Bank extends Component {
  componentDidMount() {
    this.props.getItems(this.props.match.params.channel_id);
    document.title = `memebank #${this.props.match.params.channel}`;
  }

  render() {
    return (
      <div className='Bank'>
        <TopBar
          guild={this.props.match.params.guild}
          channel={this.props.match.params.channel}
        />
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
