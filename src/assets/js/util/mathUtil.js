/**
 * 汎用的に使う計算用関数
 */

// Random float
export const getRandomFloat = (min, max) =>
  (Math.random() * (max - min) + min).toFixed(2);

// map number x from range [a, b] to [c, d]
export const map = (x, a, b, c, d) => ((x - a) * (d - c)) / (b - a) + c;

// linear interpolation
export const lerp = (a, b, n) => (1 - n) * a + n * b;

export default MathUtil;
