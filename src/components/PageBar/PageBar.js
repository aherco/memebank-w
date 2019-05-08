import React, { PureComponent } from 'react';
import ReactPaginate from 'react-paginate';

import './PageBar.css';

export default class PageBar extends PureComponent {
  render() {
    return (
      <ReactPaginate
        pageCount={this.props.pageCount}
        forcePage={this.props.currentPage}
	onPageChange={this.props.onPageChange}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        previousLabel='previous'
        nextLabel='next'
	containerClassName='PageBar'
        pageClassName='p-page'
	previousClassName='p-nav'
	nextClassName='p-nav'
	activeClassName='p-active'
	breakClassName='p-break'
      />
    );
  }
}

