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
	    <p>~ two dabs and a cat edition ~</p>
          </div>
	</WindowBox>

	<WindowBox id='h-faq' white='faq'>
	  <p>woomfy@memebank $ ~</p>
	  <p id='h-description'>memebank is a bot that makes photo/gif albums from your discord channels</p>
	  <FAQItem
	    q='how does it work?'
	    a='when you post an image/gif in a text channel, the bot will add it to a memebank. mentioning the bot @memebank#6654 will post a link to view the memebank.'
	  />
	  <FAQItem
	    q='what if i want to delete an image/gif from my memebank?'
	    a='just delete the message containing the image and it will be deleted from memebank.'
	  />
	  <FAQItem
	    q='what if i don`t want a memebank for a specific channel?'
	    a='you can simply edit the permissions of the bot to restrict it from reading and managing messages for that specific channel.'
	  />
	  <FAQItem
	    q='why doesn`t discord already have this feature?'
	    a='i really don`t know, but that`s why i made this bot. you`re welcome.'
	  />
	  <FAQItem
	    q='what if my question isn`t answered here?'
	    a='then hit me up at one of the places listed below.'
	  />
	</WindowBox>
      </div>
    );
  }
}

export default withRouter(Home);
