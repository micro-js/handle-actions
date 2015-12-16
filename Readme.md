
# handle-actions

[![Build status][travis-image]][travis-url]
[![Git tag][git-image]][git-url]
[![NPM version][npm-image]][npm-url]
[![Code style][standard-image]][standard-url]

Compose a reducer from a map of action handlers.  Very similar to handleActions in [https://github.com/acdlite/redux-actions](redux-actions), but broken out as its own separate micro-module, and it also passes your handlers only `action.payload`.  Note, this obviously assumes that you are using the flux standard action style, of `type` for the identifier and `payload` for the contents of your message. This means your reducers will be unable to examine any other fields (e.g. meta) - if you want to use other fields, don't use this module.

## Installation

    $ npm install @f/handle-actions

## Usage

```js
var handleActions = require('@f/handle-actions')

handleActions({
  UPDATE_ITEM: (state, changes) {
    // action.type === 'UPDATE_ITEM'
    return {
      ...state,
      ...changes
    }
  }
})

```

## API

### handleActions(map, defaultState)

- `map` - Map of action types to handlers.
- `defaultState` - Optional default state. This is returned if `state` is undefined.

**Returns:** A composite reducer of the reducers in your map, scoped to their specified actions.

## License

MIT

[travis-image]: https://img.shields.io/travis/micro-js/handle-actions.svg?style=flat-square
[travis-url]: https://travis-ci.org/micro-js/handle-actions
[git-image]: https://img.shields.io/github/tag/micro-js/handle-actions.svg
[git-url]: https://github.com/micro-js/handle-actions
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat
[standard-url]: https://github.com/feross/standard
[npm-image]: https://img.shields.io/npm/v/@f/handle-actions.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@f/handle-actions
