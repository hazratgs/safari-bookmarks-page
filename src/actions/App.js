import {
  GET_ALL_BOOKMARKS
} from '../constants/App'
import { getDomain, findBookmarks } from '../utils'

export function getAllBookmarks () {
  return dispatch => {
    window.chrome.bookmarks.getTree((array) => {
      const bookmarks = findBookmarks(array)
      const elements = bookmarks
        .map(item => {
          if (!item || !item.url) return null
          const title = item.title.length > 20
            ? item.title.substring(0, 20) + '...'
            : item.title
          const textLogo = getDomain(item.url)
          return {
            title: title,
            url: item.url,
            textLogo: textLogo[0]
          }
        })
        .filter(item => item)
      dispatch({
        type: GET_ALL_BOOKMARKS,
        payload: elements
      })
    })
  }
}
