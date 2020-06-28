const globalPrefix = 'CUSTOMIZER-'

export function parseStorage(v: any) {
  return v !== undefined && v !== 'undefined' ? JSON.parse(v) : null
}

export function loadFromLocalStorage(key: string, defaultValue?: any) {
  try {
    const value = localStorage[`${globalPrefix}${key}`]
    return value !== undefined && value !== 'undefined' ? JSON.parse(value) : defaultValue
  } catch (err) {
    return defaultValue
  }
}

/**
 * Helper function to serialize and store a key/value in the browsers local storage
 * @param {string} key
 * @param {*} value
 */
export function saveToLocalStorage(key: string, value: any) {
  try {
    localStorage[`${globalPrefix}${key}`] = JSON.stringify(value)
  } catch (err) {
    console.error('Error in function saveToLocalStorage  ' + err.message)
  }
}

/**
 * Remove a key from local storage (if it exists)
 * @param {string} key
 */
export function removeFromLocalStorage(key: string) {
  try {
    delete localStorage[`${globalPrefix}${key}`]
  } catch (err) {
    console.error('Error in function removeFromLocalStorage  ' + err.message)
  }
}