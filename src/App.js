import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import Bank from './scenes/Bank/Bank.js';
import Home from './scenes/Home/Home.js';
import { getItemsByChannel } from './services/items/actions.js';

import './App.css';

class App extends Component {
  render() {

    const channelBank = () => { return <Bank getItems={this.props.getItemsByChannel}/>; };

    return (
      <div className='App'>
        <Switch>
          <Route path='/:guild/:channel/:channel_id' component={channelBank}/>
          <Route path='/' component={Home}/>
          <Redirect to='/' component={Home}/>
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getItemsByChannel: (id, page, limit) => { dispatch(getItemsByChannel(id, page, limit)); },
});

export default connect(
  null,
  mapDispatchToProps,
)(App);
