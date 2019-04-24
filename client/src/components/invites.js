import React, { Component } from 'react';
import {myPeoples} from '../actions/actions.js'
import { connect } from "react-redux"
import {addInvite} from '../actions/actions.js'

class Invites extends Component {

  componentDidMount() {
    myPeoples()

  }

  addInvite = (e) => {
    e.preventDefault()
    addInvite({
      picture: this.props.picture,
      fname: this.props.fname,
      email: this.props.email
    })
  }

  render() {
    return (
      <div>
        <div>
          <img src={this.props.picture} />
          <h1>{this.props.fname}</h1>
          <p>{this.props.email}</p>
          <button onClick={this.addInvite}>Invite</button>
          <button>Sucka! DON'T INVITE!</button>
        </div>

      </div>
    )
  }
}

// function that maps the application state to props
function mapStateToProps(appState) {
  return {
    ...appState.person,
    invited: appState.invited,
  }
}

// connect() is a higher order component that ...
export default connect(mapStateToProps)(Invites)
