import test from 'node:test';
import assert from 'node:assert/strict';
import { governedAdd } from '../src/index.js';

test('governedAdd returns deterministic sum', () => {
  assert.equal(governedAdd(20, 22), 42);
});

test('governedAdd rejects non-finite input', () => {
  assert.throws(() => governedAdd(Infinity, 1), TypeError);
});
