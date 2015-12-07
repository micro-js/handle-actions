/**
 * Modules
 */

var composeReducers = require('@micro-js/compose-reducers')

/**
 * Expose handleActions
 */

module.exports = handleActions['default'] = handleActions

/**
 * handleActions
 */

function handleActions (map) {
  return composeReducers.apply(null, Object
    .keys(map)
    .map(function (type) {
      return scopeReducer(type, map[type])
    }))
}

function scopeReducer (type, reducer) {
  return function (state, action) {
    return action.type === type
      ? reducer(state, action.payload)
      : state
  }
}
