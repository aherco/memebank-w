import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import TopBar from '../../components/TopBar/TopBar.js';
import WindowBox from '../../components/WindowBox/WindowBox.js';
import FAQItem from '../../components/FAQItem/FAQItem.js';
import HomeButton from '../../components/HomeButton/HomeButton.js';

import './Home.css';

class Home extends Component {
  constructor(props) {
    super(props);
    this.viewMemebank = this.viewMemebank.bind(this);
  }

  componentDidMount() {
    this.props.history.push('/');
  }

  inviteBot() {
    window.open(process.env.REACT_APP_BOT_INVITE);
  }

  joinDiscord() {
    window.open(process.env.REACT_APP_DISCORD_JOIN);
  }

  viewMemebank() {
    this.props.history.push('/memebank-official/public-memebank/568601893673107466');
  }

  render() {
    return (
      <div className='Home'>
        <TopBar/>
	<WindowBox id='h-home' white='home'>
		<p>woomfy@memebank $ ~</p>
	  <div>
	    <img alt='' src={process.env.REACT_APP_BOT_ICON}/>
          </div>
	  <div>
	    <h1>meme<span id='h-logo-pink'>bank</span></h1>
	    <HomeButton value='invite bot' onClick={this.inviteBot}/>
	    <HomeButton value='join discord' onClick={this.joinDiscord}/>
	    <HomeButton value='view public memebank' onClick={this.viewMemebank}/>
          </div>
	</WindowBox>
      </div>
    );
  }
}

export default withRouter(Home);
