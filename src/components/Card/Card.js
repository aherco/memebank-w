import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ReactModal from 'react-modal';

import './Card.css';

export default class Card extends Component {
  constructor(props) {
    super(props);
    this.toggleModal = this.toggleModal.bind(this);

    this.state = {
      showModal: false,
    };
  }

  toggleModal() {
    this.setState({ showModal: !this.state.showModal });
  }

  render() {

    const modalProps = {
      className: 'CardModal',
      overlayClassName: 'OverlayCardModal',
      shouldCloseOnOverlayClick: true,
      isOpen: this.state.showModal,
      onRequestClose: this.toggleModal,
      ariaHideApp: false,
    };

    const imgProps = {
      alt: '',
      src: this.props.src,
      onClick: this.toggleModal,
    }

    const img = <img {...imgProps}/>;
    const modal = <ReactModal {...modalProps}>{img}</ReactModal>;
    return (
      <div className='Card'>
        {img}
        {modal}
      </div>
    );
  }
}

Card.propTypes = {
  src: PropTypes.string.isRequired,
};
