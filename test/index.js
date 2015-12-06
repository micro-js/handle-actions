/**
 * Imports
 */

var handleActions = require('..')
var test = require('tape')

/**
 * Tests
 */

test('should work', function (t) {
  var reduce = handleActions({
    test: function (state, action) {
      return 'passed'
    }
  })

  t.equal(reduce('fail', {type: 'test'}), 'passed')
  t.equal(reduce('fail', {type: 'other'}), 'fail')
  t.end()
})
