import { describe, expect, test } from 'vitest'
import { testFun } from '../index'
describe('test for vitest', () => {
  test('a test example', () => {
    expect(1).toBe(1)
  })
  test('should return result of sum by testFun', () => {
    expect(testFun(1, 2)).toBe(3)
  })
})
