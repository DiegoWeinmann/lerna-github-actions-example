const add = require('../index.js')

describe('add', () => {
  it("exports a function", () => {
    expect(typeof add).toBe('function')
  })
})