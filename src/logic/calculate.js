import operate from './operate';

function isNumber(item) {
  return !!item.match(/[0-9]+/);
}

export default function calculate(obj, buttonName) {
  if (buttonName === 'AC') {
    return {
      total: null,
      next: null,
      operation: null,
    };
  }

  if (isNumber(buttonName)) {
    if (obj.operation === null) {
      if (obj.next === null) {
        return { ...obj, next: buttonName };
      } if (obj.next === '0') {
        return { ...obj, next: buttonName };
      }
      return { ...obj, next: obj.next + buttonName };
    }
    if (obj.next === null) {
      return { ...obj, next: buttonName };
    }
    return { ...obj, next: obj.next + buttonName };
  }

  if (buttonName === '.') {
    if (obj.next === null) {
      return { ...obj, next: '0.' };
    }
    if (!obj.next.includes('.')) {
      return { ...obj, next: `${obj.next}.` };
    }
    return { ...obj };
  }

  if (buttonName === '=') {
    if (obj.next !== null && obj.operation !== null) {
      try {
        const total = operate(obj.total, obj.next, obj.operation);
        return {
          total: total.toString(),
          next: null,
          operation: null,
        };
      } catch (error) {
        return {
          total: 'Error',
          next: null,
          operation: null,
        };
      }
    }
    return { ...obj };
  }

  if (buttonName === '+/-') {
    if (obj.next !== null) {
      return { ...obj, next: (-parseFloat(obj.next)).toString() };
    }
    if (obj.total !== null) {
      return { ...obj, total: (-parseFloat(obj.total)).toString() };
    }
    return { ...obj };
  }

  if (['+', '-', '*', '/', '%'].includes(buttonName)) {
    if (obj.operation !== null) {
      try {
        const total = operate(obj.total, obj.next, obj.operation);
        return {
          total: total.toString(),
          next: null,
          operation: buttonName,
        };
      } catch (error) {
        return {
          total: 'Error',
          next: null,
          operation: null,
        };
      }
    }
    if (obj.next !== null) {
      return {
        total: obj.next,
        next: null,
        operation: buttonName,
      };
    }
    return { ...obj, operation: buttonName };
  }

  if (buttonName === 'Del') {
    if (obj.next !== null) {
      return { ...obj, next: obj.next.slice(0, -1) };
    }
    if (obj.total !== null) {
      return { ...obj, total: obj.total.slice(0, -1) };
    }
    return { ...obj };
  }

  // Handle division by zero
  if (buttonName === '/') {
    if (obj.next === '0') {
      return {
        total: 'Error',
        next: null,
        operation: null,
      };
    }
  }

  throw Error(`Unknown button '${buttonName}'`);
}
