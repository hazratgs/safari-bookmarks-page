import {
  GET_ALL_BOOKMARKS
} from '../constants/App'

export function getAllBookmarks () {
  return dispatch => {
    window.chrome.bookmarks.getTree((array) => {
      const elements = array[0].children[0].children.map(item => ({
        title: item.title.substring(0, 32) + '...',
        url: item.url
      }))
      console.log(elements, array)
      dispatch({
        type: GET_ALL_BOOKMARKS,
        payload: elements
      })
    })
  }
}
