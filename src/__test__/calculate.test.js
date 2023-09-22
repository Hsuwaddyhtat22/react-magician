import calculate from '../logic/calculate';

test('calculate function snapshots', () => {
  // Test various scenarios with the calculate function
  const scenarios = [
    { state: { total: '123', next: '456', operation: '+' }, button: 'AC' },
    { state: { total: '123', next: '456', operation: '+' }, button: '7' },
    { state: { total: '123', next: '456', operation: '+' }, button: '.' },
    { state: { total: '10', next: '5', operation: '+' }, button: '=' },
    { state: { total: null, next: '5', operation: null }, button: '+/-' },
    { state: { total: '987', next: null, operation: '+' }, button: 'Del' },
    { state: { total: '10', next: '0', operation: '/' }, button: '/' },
  ];

  scenarios.forEach((scenario, index) => {
    const result = calculate(scenario.state, scenario.button);
    expect(result).toMatchSnapshot(`Scenario ${index + 1}`);
  });
});
