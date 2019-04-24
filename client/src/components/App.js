import React, { Component } from 'react'
import { Provider } from 'react-redux'
import store from '../store'
import Invites from './invites'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Invites />
      </Provider>
    )
  }
}

export default App
