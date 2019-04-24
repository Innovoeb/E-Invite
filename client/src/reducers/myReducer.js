const initialState = {
  person: {},
  invited: [],
  notinvited: [],
}

// a reducer receives actions in order to change the different application states
export default function myReducer(state = initialState, action) {
  switch ( action.type ) {
    // check weather api for forcast and grab the forecast array
    case 'ADD_INVITE_LIST':
      return {...state,
        invited: action.invited,
      }
    case 'ADD_NONINVITE_LIST':
      return {...state,
        notinvited: action.notinvited,
      }
    case 'GET_PEOPLES':
      return {...state,
        person: action.person,
      }
    default:
      return state
  }
}
