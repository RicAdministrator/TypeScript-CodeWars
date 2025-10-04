import { sixToast } from '../src/a_8kyu_basic_making_six_toast';

test('Test a_8kyu_basic_making_six_toast', () => {
  expect(sixToast(15)).toBe(9);
  expect(sixToast(6)).toBe(0);
  expect(sixToast(3)).toBe(3);
});