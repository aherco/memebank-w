import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import { connect } from 'react-redux';

class Bank extends Component {
  componentDidMount() {
    this.props.getItems(this.props.match.params.id);
  }

  render() {
    return (
      <div className='Bank'>

      </div>
    );
  }
}

const mapStateToProps = state => ({
  items: state.items,
});

Bank.propTypes = {
  getItems: PropTypes.func.isRequired,
  items: PropTypes.array.isRequired,
};

export default withRouter(
  connect(
    mapStateToProps,
    null,
  )(Bank)
);
