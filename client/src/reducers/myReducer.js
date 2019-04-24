const initialState = {
  peoples: [],
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
        peoples: action.peoples,
      }
    default:
      return state
  }
}
