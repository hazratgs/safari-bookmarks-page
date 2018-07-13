import {
  GET_ALL_BOOKMARKS
} from '../constants/App'

const initialState = {
  items: []
}

export default function appState (state = initialState, action) {
  switch (action.type) {
    case GET_ALL_BOOKMARKS:
      return { ...state, items: action.payload }

    default:
      return state
  }
}
