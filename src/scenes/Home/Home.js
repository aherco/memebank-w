import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import TopBar from '../../components/TopBar/TopBar.js';
import WindowBox from '../../components/WindowBox/WindowBox.js';
import FAQItem from '../../components/FAQItem/FAQItem.js';

import './Home.css';

class Home extends Component {
  componentDidMount() {
    this.props.history.push('/');
  }

  render() {
    return (
      <div className='Home'>
        <TopBar/>
        <WindowBox id='h-nav' white='home'>
	  <p>woomfy@memebank $ ~</p>
          <a 
	    href='https://discordapp.com/api/oauth2/authorize?client_id=561178353156096015&permissions=8192&scope=bot'
	    rel='noreferrer noopener'
	    target='_blank'
	  >/invite bot</a>

	  <a 
	    href='https://discord.gg/2QXctsG'
	    rel='noreferrer noopener'
	    target='_blank'
	  >/join discord</a>

	  <a 
	    href='http://www.memebank.me/memebank-official/public/568601893673107466'
	  >/public memebank</a>
	</WindowBox>

        <WindowBox white='welcome'>
          <p>woomfy@memebank $ ~</p>
	  <p>this is a site for a bot that makes photo/gif albums from your discord server</p>
          <pre id='h-asciiart'>
          ⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⠶⣿⣭⡧⡤⣤⣻⣛⣹⣿⣿⣿⣶⣄<br/>
          ⢀⢀⢀⢀⢀⢀⢀⢀⢀⣼⣊⣤⣶⣷⣶⣧⣤⣽⣿⣿⣿⣿⣿⣿⣷<br/>
          ⢀⢀⢀⢀⢀⢀⢀⢀⢀⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇<br/>
          ⢀⢀⢀⢀⢀⢀⢀⣠⣶⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧<br/>
          ⢀⢀⢀⢀⢀⢀⠸⠿⣿⣿⠿⣿⣿⣿⣿⣿⣿⣿⡿⣿⣻⣿⣿⣿⣿⣿⡆<br/>
          ⢀⢀⢀⢀⢀⢀⢀⢸⣿⣿⡀⠘⣿⡿⢿⣿⣿⡟⣾⣿⣯⣽⣼⣿⣿⣿⣿⡀<br/>
          ⢀⢀⢀⢀⢀⢀⡠⠚⢛⣛⣃⢄⡁⢀⢀⢀⠈⠁⠛⠛⠛⠛⠚⠻⣿⣿⣿⣷<br/>
          ⢀⢀⣴⣶⣶⣶⣷⡄⠊⠉⢻⣟⠃⢀⢀⢀⢀⡠⠔⠒⢀⢀⢀⢀⢹⣿⣿⣿⣄⣀⣀⣀⣀⣀⣀<br/>
          ⢠⣾⣿⣿⣿⣿⣿⣿⣿⣶⣄⣙⠻⠿⠶⠒⠁⢀⢀⣀⣤⣰⣶⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣄<br/>
          ⢿⠟⠛⠋⣿⣿⣿⣿⣿⣿⣿⣟⡿⠷⣶⣶⣶⢶⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡄<br/>
          ⢀⢀⢀⢀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠉⠙⠻⠿⣿⣿⡿<br/>
          ⢀⢀⢀⢀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢀⢀⢀⢀⠈⠁<br/>
          ⢀⢀⢀⢀⢸⣿⣿⣿⣿⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿<br/>
          ⢀⢀⢀⢀⢸⣿⣿⣿⣿⣄⠈⠛⠿⣿⣿⣿⣿⣿⣿⣿⡿⠟⣹⣿⣿⣿⣿⣿⣿⣿⣿⠇<br/>
          ⢀⢀⢀⢀⢀⢻⣿⣿⣿⣿⣧⣀⢀⢀⠉⠛⠛⠋⠉⢀⣠⣾⣿⣿⣿⣿⣿⣿⣿⣿⠏<br/>
          ⢀⢀⢀⢀⢀⢀⢻⣿⣿⣿⣿⣿⣷⣤⣄⣀⣀⣤⣴⣾⣿⣿⣿⣿⣿⣿⣿⣿⡿⠋<br/>
          ⢀⢀⢀⢀⢀⢀⢀⠙⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠛<br/>
          ⢀⢀⢀⢀⢀⢀⢀⢀⢀⢹⣿⡿⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⠁<br/>
          ⢀⢀⢀⢀⢀⢀⢀⢀⢀⢸⣿⡇⢀⠈⠙⠛⠛⠛⠛⠛⠛⠻⣿⣿⣿⠇<br/>
          ⢀⢀⢀⢀⢀⢀⢀⢀⢀⣸⣿⡇⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢨⣿⣿<br/>
          ⢀⢀⢀⢀⢀⢀⢀⢀⣾⣿⡿⠃⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢸⣿⡏<br/>
          ⢀⢀⢀⢀⢀⢀⢀⢀⠻⠿⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢠⣿⣿⡇<br/>
          </pre>
	  <p>~ please enjoy ~</p>
        </WindowBox>

	<WindowBox id='h-faq' white='faq'>
          <p>woomfy@memebank $ ~</p>
	  <FAQItem
	    q='how does the bot work?'
            a='when you post an image/gif in a text channel, the bot will add it to a memebank photo album. 
	       mentioning the bot @memebank#6654 will post a link to view the memebank. the link will delete itself after 10 seconds.'
	  />
	  <FAQItem
	    q='what if i want to delete an image/gif from my memebank'
	    a='just delete the message and memebank will cleanup automatically'
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

	<WindowBox id='h-contact' white='contact'>
          <p>woomfy@memebank $ ~</p>
          <p>discord: woomfy#4179</p>
	  <p>email: woomfy@420blaze.it</p> 
	  <p>disclaimer: im just starting out here so if u see a bug, email or dm me</p>
	</WindowBox>
      </div>
    );
  }
}

export default withRouter(Home);
