import React, { Component } from 'react';
import PropTypes from 'prop-types';

import StackGrid from 'react-stack-grid';
import Card from '../Card/Card.js';

import './BankStackGrid.css';

export default class BankStackGrid extends Component {
  constructor(props) {
    super(props);
    this.updateLayout = this.updateLayout.bind(this);
  }

  unmarshallItems(items) {
    return items.map((item) => { 
      return <Card 
        key={item.ID} 
	id={item.ID}
	msgid={item.message_id}
        src={item.content}
	type={item.type}
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
      onClick: this.updateLayout,
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

