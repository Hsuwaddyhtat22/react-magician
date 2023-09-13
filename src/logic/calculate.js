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
        if (buttonName === '0' && obj.next === '0') {
            return {};
        }
        if (obj.operation) {
            if (obj.next === '0' || obj.next === null) {
                return {...obj, next: buttonName };
            }
            return {...obj, next: obj.next + buttonName };
        }
        if (obj.next && obj.next !== '0') {
            return {
                next: obj.next + buttonName,
                total: null,
            };
        }
        return {
            next: buttonName,
            total: null,
        };
    }

    if (buttonName === '.') {
        if (obj.next) {
            if (obj.next.includes('.')) {
                return {...obj };
            }
            return {...obj, next: `${obj.next}.` };
        }
        if (obj.operation) {
            return {...obj, next: '0.' };
        }
        if (obj.total) {
            if (obj.total.includes('.')) {
                return {};
            }
            return {...obj, next: `${obj.total}.` };
        }
        return {...obj, next: '0.' };
    }

    if (buttonName === '=') {
        if (obj.next && obj.operation) {
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
        return {};
    }

    if (buttonName === '+/-') {
        if (obj.next) {
            return {...obj, next: (-1 * parseFloat(obj.next)).toString() };
        }
        if (obj.total) {
            return {...obj, total: (-1 * parseFloat(obj.total)).toString() };
        }
        return {};
    }

    // Handle operators (+, -, *, /, %)
    if (['+', '-', '*', '/', '%'].includes(buttonName)) {
        if (obj.operation) {
            return {
                total: obj.total,
                next: null,
                operation: buttonName,
            };
        }
        if (obj.next) {
            return {
                total: obj.next,
                next: null,
                operation: buttonName,
            };
        }
        return {...obj, operation: buttonName };
    }

    if (buttonName === 'Del') {
        if (obj.next) {
            return {...obj, next: obj.next.slice(0, -1) };
        }
        if (obj.total) {
            return {...obj, total: obj.total.slice(0, -1) };
        }
        return {...obj };
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

    // Handle other unknown buttons
    throw Error(`Unknown button '${buttonName}'`);
}