import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import ReactModal from 'react-modal';

import './Card.css';

export default class Card extends PureComponent {
  constructor(props) {
    super(props);
    this.toggleModal = this.toggleModal.bind(this);
    this.onLoad = this.onLoad.bind(this);

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
  src: PropTypes.string.isRequired,
};
