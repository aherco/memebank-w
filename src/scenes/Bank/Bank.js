import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import qs from 'qs';

import TopBar from '../../components/TopBar/TopBar.js';
import BankStackGrid from '../../components/BankStackGrid/BankStackGrid.js';
import PageBar from '../../components/PageBar/PageBar.js';

import './Bank.css';

class Bank extends Component {
  constructor(props) {
    super(props);
    const qstr = qs.parse(this.props.location.search, { ignoreQueryPrefix: true });
    this.state = {
      page: qstr.page || "0",
      limit: qstr.limit || "50",
    };
    this.onPageChange = this.onPageChange.bind(this);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const qstr = qs.parse(nextProps.location.search, { ignoreQueryPrefix: true });
    if (qstr.page !== prevState.page || qstr.limit !== prevState.limit) {
      return qstr;
    }
    return null;
  }


  componentDidMount() {
    this.props.getItems(
      this.props.match.params.channel_id,
      this.state.page,
      this.state.limit,
    );

    document.title = `memebank #${this.props.match.params.channel}`;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.state.page !== prevState.page || this.state.limit !== prevState.limit) {
      this.props.getItems(
        this.props.match.params.channel_id,
        this.state.page,
        this.state.limit,
      );
    }
  }

  onPageChange(page) {
    console.log(page.selected);
    this.props.history.push({
      pathname: this.props.location.pathname,
      search: qs.stringify({ page: String(page.selected), limit: this.state.limit}, { addQueryPrefix: true }),
    });
  }

  render() {
    return (
      <div className='Bank'>
        <TopBar
          bank
          guild={this.props.match.params.guild}
          channel={this.props.match.params.channel}
        />
	{this.props.items ? <div className='b-content'>
	  <BankStackGrid items={this.props.items.batch}/>
	  
        </div> : null}
	{this.props.items ? <PageBar
          pageCount={this.props.items.count / this.state.limit}
          currentPage={Number(this.state.page)}
          onPageChange={this.onPageChange}
        /> : null}
      </div>
    );
  }
}

Bank.propTypes = {
  getItems: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  items: state.items,
});

export default withRouter(
  connect(
    mapStateToProps,
    undefined,
  )(Bank)
);
