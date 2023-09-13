import Big from 'big.js';

export default function operate(numberOne, numberTwo, operation) {
  const one = Big(numberOne);
  const two = Big(numberTwo);

  if (operation === '+') {
    return one.plus(two).toString();
  }

  if (operation === '-') {
    return one.minus(two).toString();
  }

  if (operation === 'x' || operation === '*') {
    return one.times(two).toString();
  }

  if (operation === '÷' || operation === '/') {
    if (two.eq(0)) { // Check if the denominator is zero
      throw new Error("Can't divide by 0.");
    }
    return one.div(two).toString();
  }

  if (operation === '%') {
    if (two.eq(0)) { // Check if the denominator is zero
      throw new Error("Can't find modulo as can't divide by 0.");
    }
    return one.mod(two).toString();
  }

  throw new Error(`Unknown operation '${operation}'`);
}
