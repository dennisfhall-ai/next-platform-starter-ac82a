export function governedAdd(a, b) {
  if (!Number.isFinite(a) || !Number.isFinite(b)) throw new TypeError('finite numbers required');
  return a + b;
}
