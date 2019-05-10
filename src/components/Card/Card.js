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
      .delete(`${process.env.REACT_APP_API_ENDPOINT}/items/${this.props.id}/${this.props.msgid}`)
      .then(console.log)
      .catch(console.error)
    ;
  }

  render() {
    let content;
    let modal;

    switch(this.props.type) {
    case 'vid':
      const vidProps = {
        controls: true,
        loop: true,
        muted: true,
	onError: this.onError,
      };

      content = (
        <video {...vidProps}>
	  <source src={this.props.src} type='video/webm'/>
	  <source src={this.props.src} type='video/mp4'/>
	</video>
      );
      break;
	      
    case 'ifr':
      const ifrProps = {
	src: this.props.src + '?autoplay=1&hd=1',
	onLoad: this.onLoad,
	onError: this.onError,
	frameBorder: '0',
	allowFullScreen: true,
        style: this.state.loaded ? {} : { display: 'none' },
      };

      content = <iframe title={this.props.id} {...ifrProps}/>;
      break;
 
    default:
      const imgProps = {
        src: this.props.src,
        onLoad: this.onLoad,
        onError: this.onError,
        style: this.state.loaded ? {} : { display: 'none' },
        onClick: this.toggleModal,
      };

      content = <img alt='' {...imgProps}/>;

      const modalProps = {
        className: 'CardModal',
        overlayClassName: 'OverlayCardModal',
        shouldCloseOnOverlayClick: true,
        isOpen: this.state.showModal,
        onRequestClose: this.toggleModal,
        ariaHideApp: false,
      };  

      modal = <ReactModal {...modalProps}>{content}</ReactModal>;
      break;
    }

    const placeholder = this.state.loaded || this.props.type === 'vid' ? null : <div className='PlaceholderCard'></div>;

    return (
      <div className='Card'>
        {content}
        {placeholder}
        {modal}
      </div>
    );
  }
}

Card.propTypes = {
  id: PropTypes.number.isRequired,
  src: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

