import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import StackGrid from 'react-stack-grid';
import Card from '../Card/Card.js';

import './BankStackGrid.css';

class BankStackGrid extends Component {

  unmarshallItems(items) {
    return items.reverse().map((item) => { return <Card key={item.ID} src={item.content}/>; });
  }

  updateLayout = () => {
    this.grid.updateLayout();
  }

  render() {

    const gridProps = {
      // Set a reference for the grid instance
      gridRef: grid => this.grid = grid,

      // Resize image height on load
      monitorImagesLoaded: true,

      // Layout
      columnWidth: '25%',
      gutterWidth: 10,
      gutterHeight: 10,

      // Animation
      duration: 100,

      // Layout updating :: this is a hack and needs to be changed to something else
      onMouseEnter: this.updateLayout,
      onMouseLeave: this.updateLayout,
    };

    return (
      <div className='BankStackGrid'>
        <StackGrid {...gridProps}>{this.unmarshallItems(this.props.items)}</StackGrid>
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
