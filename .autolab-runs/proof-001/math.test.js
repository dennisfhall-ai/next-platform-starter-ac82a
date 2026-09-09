import test from 'node:test';
import assert from 'node:assert/strict';

test('runtime harness executes tests', () => {
  assert.equal(2 + 3, 5);
});
