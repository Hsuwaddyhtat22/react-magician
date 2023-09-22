import operate from '../logic/operate';

test('adds two numbers', () => {
    expect(operate('2', '3', '+')).toMatchSnapshot();
});

test('subtracts two numbers', () => {
    expect(operate('5', '3', '-')).toMatchSnapshot();
});

test('multiplies two numbers', () => {
    expect(operate('4', '2', '*')).toMatchSnapshot();
});

test('divides two numbers', () => {
    expect(operate('6', '2', '/')).toMatchSnapshot();
});

test('throws an error when dividing by zero', () => {
    expect(() => operate('10', '0', '/')).toThrowErrorMatchingSnapshot();
});

test('finds modulo of two numbers', () => {
    expect(operate('10', '3', '%')).toMatchSnapshot();
});

test('throws an error when finding modulo by zero', () => {
    expect(() => operate('10', '0', '%')).toThrowErrorMatchingSnapshot();
});

test('throws an error for an unknown operation', () => {
    expect(() => operate('10', '5', '^')).toThrowErrorMatchingSnapshot();
});