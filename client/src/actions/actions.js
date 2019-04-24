import store from '../store'
import axios from 'axios'



export function myPeoples() {
  axios.get('https://randomuser.me/api/').then(resp => {
    console.log(resp.data.results);
    store.dispatch({
      type: 'GET_PEOPLES',
      peoples: resp.data.results
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
