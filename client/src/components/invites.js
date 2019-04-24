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
    addInvite(this.props.peoples[0].name.first)
  }

  render() {
    return (
      <div>
      {this.props.peoples.map(person => (
        <div>
          <img src={person.picture.large} />
          <h1>{person.name.first}</h1>
          <p>{person.email}</p>
          <button onClick={this.addInvite}>Invite</button>
          <button>Sucka! DON'T INVITE!</button>
        </div>
      ))}

      </div>
    )
  }
}

// function that maps the application state to props
function mapStateToProps(appState) {
  return {
    peoples: appState.peoples,
    invited: appState.invited,

  }
}

// connect() is a higher order component that ...
export default connect(mapStateToProps)(Invites)
