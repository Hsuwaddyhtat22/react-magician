import operate from '../logic/operate';

test('adds two numbers', () => {
  expect(operate('2', '3', '+')).toBe('5');
});

test('subtracts two numbers', () => {
  expect(operate('5', '3', '-')).toBe('2');
});

test('multiplies two numbers', () => {
  expect(operate('4', '2', '*')).toBe('8');
});

test('divides two numbers', () => {
  expect(operate('6', '2', '/')).toBe('3');
});

test('throws an error when dividing by zero', () => {
  expect(() => operate('10', '0', '/')).toThrow("Can't divide by 0.");
});

test('finds modulo of two numbers', () => {
  expect(operate('10', '3', '%')).toBe('1');
});

test('throws an error when finding modulo by zero', () => {
  expect(() => operate('10', '0', '%')).toThrow("Can't find modulo as can't divide by 0.");
});

test('throws an error for unknown operation', () => {
  expect(() => operate('10', '5', '^')).toThrow("Unknown operation '^'");
});
