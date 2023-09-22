import calculate from '../logic/calculate';

describe('calculate function', () => {
  it('clears the calculator when "AC" is pressed', () => {
    const initialState = {
      total: '10',
      next: '5',
      operation: '+',
    };

    const result = calculate(initialState, 'AC');

    expect(result).toEqual({
      total: null,
      next: null,
      operation: null,
    });
  });

  it('adds a digit when a number button is pressed', () => {
    const initialState = {
      total: null,
      next: null,
      operation: null,
    };

    const result = calculate(initialState, '7');

    expect(result).toEqual({
      total: null,
      next: '7',
      operation: null,
    });
  });

  it('handles decimal points correctly', () => {
    const initialState = {
      total: null,
      next: '3',
      operation: null,
    };

    const result = calculate(initialState, '.');

    expect(result).toEqual({
      total: null,
      next: '3.',
      operation: null,
    });
  });

  it('performs addition correctly', () => {
    const initialState = {
      total: '10',
      next: '5',
      operation: '+',
    };

    const result = calculate(initialState, '=');

    expect(result).toEqual({
      total: '15',
      next: null,
      operation: null,
    });
  });

  it('handles division by zero correctly', () => {
    const initialState = {
      total: '10',
      next: '0',
      operation: '/',
    };

    const result = calculate(initialState, '=');

    expect(result).toEqual({
      total: 'Error',
      next: null,
      operation: null,
    });
  });

  // Add more test cases for other scenarios...

  // You can write tests for other scenarios as needed.
});
