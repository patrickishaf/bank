const { SavingsAccount } = require('./app/account');
const Constants = require('./utils/constants');

const acc = new SavingsAccount({
  firstName: 'Peter',
  lastName: 'Ndukwe',
  middleName: 'Onum',
  otherNames: [],
  accountNumber: '0061215518',
  type: Constants.SAVINGS
});

console.log(console.log(JSON.stringify(acc)));