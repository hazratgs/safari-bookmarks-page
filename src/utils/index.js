export function getHostName (url) {
  var match = url.match(/:\/\/(www[0-9]?\.)?(.[^/:]+)/i)
  if (match != null && match.length > 2 && typeof match[2] === 'string' && match[2].length > 0) {
    return match[2]
  } else {
    return null
  }
}

export function getDomain (url) {
  var hostName = getHostName(url)
  var domain = hostName

  if (hostName != null) {
    var parts = hostName.split('.').reverse()

    if (parts != null && parts.length > 1) {
      domain = parts[1] + '.' + parts[0]

      if (hostName.toLowerCase().indexOf('.co.uk') !== -1 && parts.length > 2) {
        domain = parts[2] + '.' + domain
      }
    }
  }
  return domain
}

export function findBookmarks (array) {
  const bookmarks = []
  const find = (array) => {
    if (array.children) return find(array.children)
    if (array.title) return bookmarks.push(array)
    return array.map(item => find(item))
  }
  find(array)
  return bookmarks
}
