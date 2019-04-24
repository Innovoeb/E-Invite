import store from '../store'
import axios from 'axios'



export function myPeoples() {
  axios.get('https://randomuser.me/api/').then(resp => {
    console.log(resp.data.results);
    const person = resp.data.results[0]
    store.dispatch({
      type: 'GET_PEOPLES',
      person: {
        fname: person.name.first,
        lname: person.name.last,
        phone: person.phone,
        email: person.email,
        picture: person.picture.large
      }
    })
  })
}

export function addInvite(person) {
  axios.post('/api/invited', person ).then(resp => {
    console.log(resp)
    store.dispatch({
      type: 'ADD_INVITE_LIST',
      invited: resp
    })
  })
}
