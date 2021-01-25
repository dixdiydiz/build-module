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
  it('module.exports', () => {
    expect(buildModule('module.exports = 3')).toBe(3)
  })
  it('exports', () => {
    expect(buildModule('exports.a = 3')).toEqual({ a: 3 })
  })
})
