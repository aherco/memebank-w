import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import StackGrid from 'react-stack-grid';
import Card from '../Card/Card.js';

import './BankStackGrid.css';

class BankStackGrid extends Component {
  constructor(props) {
    super(props);
    this.updateLayout = this.updateLayout.bind(this);
    this.state = { items: [] };
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.items !== prevProps.items) {
      this.setState({ items: this.unmarshallItems(this.props.items) }) ;
    }
  }

  unmarshallItems(items) {
    return items.map((item) => { 
      return <Card 
        key={item.ID} 
	id={item.ID}
        src={item.content}
      />;
    });
  }

  updateLayout() {
    this.grid.updateLayout();
  }

  render() {

    const gridProps = {
      // Set a reference for the grid instance
      gridRef: grid => this.grid = grid,

      // Layout
      columnWidth: '25%',
      gutterWidth: 10,
      gutterHeight: 10,

      // Animation
      duration: 100,

      // Layout updating
      onMouseEnter: this.updateLayout,
      onMouseLeave: this.updateLayout,
      onScroll: this.updateLayout,
    };

    return (
      <div className='BankStackGrid'>
        <StackGrid {...gridProps}>{this.state.items}</StackGrid>
      </div>
    );
  }
}

BankStackGrid.propTypes = {
  items: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
  items: state.items,
});

export default connect(
    mapStateToProps,
    null,
)(BankStackGrid);
