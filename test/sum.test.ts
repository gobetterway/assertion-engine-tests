import {
  expect as earlExpect
} from 'earljs'

import { expect as assertiveExpect } from "@stackbuilders/assertive-ts"

import * as tassert from "typed-assert";

import chai, { expect as chaiExpect, assert as chaiAssert, should as chaiShould } from 'chai';
chaiShould()
chai.config.includeStack = true;


import { sum } from '../src/sum'

const FAILING_VAR = 16

describe('Simple tests', () => {
  const actual = sum(1, 2, 4, 8)

  it('sums numbers fail | Earl', () => {
    earlExpect(actual).toEqual(FAILING_VAR)
  })

  it('sums numbers fail | Assertive-TS', () => {
    assertiveExpect(actual).toBeEqual(FAILING_VAR)
  })

  it('sums numbers fail | Typed Assert', () => {
    tassert.isExactly(actual, FAILING_VAR, 'A nice Typed Assert test')
  })

  it('sums numbers fail | chai Expect', () => {
    chaiExpect(actual).equal(FAILING_VAR, 'A nice chai expect')
  })

  it('sums numbers fail | chai Assert', () => {
    chaiAssert.equal(actual, FAILING_VAR, 'A nice chai assert test')
  })

  it('sums numbers fail | chai Should', () => {
    actual.should.equal(FAILING_VAR, 'A nice chai should test')
  })

})


describe('Tests using matrices ', () => {
  const test_matrice = [
    [1, 2, 4, 8, 15],
    [1, 2, 4, 8, FAILING_VAR],
    [2, 3, 4, 8, 17],
  ]

  it('sums numbers via matrices | Earl', () => {
    test_matrice.forEach(t => earlExpect(sum.apply(undefined, t.slice(0, -1))).toEqual(t.slice(-1)[0]));
  })

  it('sums numbers via matrices | Assertive-TS', () => {
    test_matrice.forEach(t => assertiveExpect(sum.apply(undefined, t.slice(0, -1))).toBeEqual(t.slice(-1)[0]));
  })

  it('sums numbers via matrices | Typed Assert', () => {
    test_matrice.forEach(t => tassert.isExactly(sum.apply(undefined, t.slice(0, -1)), t.slice(-1)[0]));
  })

  it('sums numbers via matrices | chai Expect', () => {
    test_matrice.forEach(t => chaiExpect(sum.apply(undefined, t.slice(0, -1))).equal(t.slice(-1)[0]), 'A nice chai expect');
  })

  it('sums numbers via matrices | chai Assert', () => {
    test_matrice.forEach(t => chaiAssert.equal(sum.apply(undefined, t.slice(0, -1)), t.slice(-1)[0]), 'A nice chai assert test');
  })

  it('sums numbers via matrices | chai Should', () => {
    test_matrice.forEach(t => sum.apply(undefined, t.slice(0, -1)).should.equal(t.slice(-1)[0]), 'A nice chai should test');
  })

})