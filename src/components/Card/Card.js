import React, { Component } from 'react';
import PropTypes from 'prop-types';

import request from 'superagent';
import ReactModal from 'react-modal';


import './Card.css';

export default class Card extends Component {
  constructor(props) {
    super(props);
    this.toggleModal = this.toggleModal.bind(this);
    this.onLoad = this.onLoad.bind(this);
    this.onError = this.onError.bind(this);

    this.state = {
      showModal: false,
      loaded: false,
    };
  }

  toggleModal() {
    this.setState({ showModal: !this.state.showModal });
  }

  onLoad() {
    this.setState({ loaded: true });
  }
  
  onError() {
    request
      .delete(`https://1t7lfirpvc.execute-api.us-east-1.amazonaws.com/dev/items/${this.props.id}`)
      .then(console.log)
      .catch(console.error)
    ;
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
      src: this.props.src,
      onClick: this.toggleModal,
      onLoad: this.onLoad,
      onError: this.onError,
      style: this.state.loaded ? {} : { display: 'none' },
    }

    const img = <img alt='' {...imgProps}/>;
    const placeholder = this.state.loaded ? null : <div className='PlaceholderCard'></div>;
    const modal = <ReactModal {...modalProps}>{img}</ReactModal>;

    return (
      <div className='Card'>
        {img}
        {placeholder}
        {modal}
      </div>
    );
  }
}

Card.propTypes = {
  id: PropTypes.number.isRequired,
  src: PropTypes.string.isRequired,
};

