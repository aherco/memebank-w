import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import Bank from './scenes/Bank/Bank.js';
import { getItemsByGuild } from './services/items/actions.js';

import './App.css';

class App extends Component {
  render() {

    const guildBank = () => { return <Bank getItems={this.props.getItemsByGuild}/>; };

    return (
      <div className='App'>
        <Switch>
          <Route path='/:id' component={guildBank}/>
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getItemsByGuild: (id) => { dispatch(getItemsByGuild(id)); },
});

export default connect(
  null,
  mapDispatchToProps,
)(App);
