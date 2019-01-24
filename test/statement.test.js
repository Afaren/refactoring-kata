const statement = require('../src/statement')
const invoices = require('../src/invoices')
const plays = require('../src/plays')


test('get target statement', () => {
  let expectedStatement =`\
Statement for BigCo
  Hamlet: $650.00 (55 seats)
  As You Like It: $580.00 (35 seats)
  Othello: $500.00 (40 seats)
Amount owed is $1,730.00
You earned 47 credits
`;
  expect(statement(invoices[0], plays)).toBe(expectedStatement)
})