'use strict'

const chai = require('chai')
const expect = chai.expect
const chaiAsPromised = require('chai-as-promised')

chai.use(chaiAsPromised)

const p = require('../promise.js')

describe('Function foo', ()=> {
  it('should resolve any number but 1', ()=> {
    let promise = p.foo(2)
    return expect(promise).to.eventually.equal(2)
  })
  it('should reject 1', () => {
    let promise = p.foo(1)
    return expect(promise).to.be.rejected
  })
})
