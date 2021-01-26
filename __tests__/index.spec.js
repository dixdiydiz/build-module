const buildModule = require('dist/index')

describe('require from string', () => {
  it('module.exports', () => {
    expect(buildModule('module.exports = 3')).toBe(3)
  })
  it('exports', () => {
    expect(buildModule('exports.a = 3')).toEqual({ a: 3 })
  })
})
describe('require from file', () => {
  it('require from .js file', () => {
    expect(buildModule('', './unknow.js')).toThrow()
  })
  it('require from .ts file', () => {
    expect(buildModule('module.exports = "a"', './unknow.ts')).toEqual('a')
  })
})
