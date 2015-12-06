
# handle-actions

[![Build status][travis-image]][travis-url]
[![Git tag][git-image]][git-url]
[![NPM version][npm-image]][npm-url]
[![Code style][standard-image]][standard-url]

Compose a reducer from a map of action handlers.  Identical to handleActions in [https://github.com/acdlite/redux-actions](redux-actions), but broken out as its own separate micro-module.

## Installation

    $ npm install @micro-js/handle-actions

## Usage

```js
var handleActions = require('@micro-js/handle-actions')

handleActions({
  UPDATE_ITEM: (state, action) {
    // action.type === 'UPDATE_ITEM'
    return {
      ...state,
      ...action.item
    }
  }
})

```

## API

### handleActions(map)

- `map` - Map of action types to handlers.

**Returns:** A composite reducer of the reducers in your map, scoped to their specified actions.

## License

MIT

[travis-image]: https://img.shields.io/travis/micro-js/handle-actions.svg?style=flat-square
[travis-url]: https://travis-ci.org/micro-js/handle-actions
[git-image]: https://img.shields.io/github/tag/micro-js/handle-actions.svg
[git-url]: https://github.com/micro-js/handle-actions
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat
[standard-url]: https://github.com/feross/standard
[npm-image]: https://img.shields.io/npm/v/@micro-js/handle-actions.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@micro-js/handle-actions
