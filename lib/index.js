/**
 * Modules
 */

var composeReducers = require('@f/compose-reducers')
var isUndefined = require('@f/is-undefined')

/**
 * Expose handleActions
 */

module.exports = handleActions['default'] = handleActions

/**
 * handleActions
 */

function handleActions (map, defaultState) {
  return composeReducers.apply(null, Object
    .keys(map)
    .map(function (type) {
      return scopeReducer(type, map[type], defaultState)
    }))
}

function scopeReducer (type, reducer, defaultState) {
  return function (state, action) {
    return action.type === type
      ? reducer(state, action.payload)
      : (isUndefined(state) ? defaultState : state)
  }
}
