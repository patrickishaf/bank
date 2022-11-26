const { CurrentAccount, SavingsAccount, Account } = require('../src/app/account');
const Constants = require('../src/utils/constants');

describe('Account', () => {
  it('deposit method increases the balance by the deposit', () => {
    const acc = new Account({
      firstName: 'Peter',
      lastName: 'Ndukwe',
      middleName: 'Onum',
      otherNames: [],
      accountNumber: '0061215518',
      type: Constants.SAVINGS
    });

    acc.receiveDeposit(3000);

    expect(acc.balance).toBe(3000);
  });
});

describe('SavingsAccount', () => {
  it(`will always have a max value of ${Constants.MAX_ACCOUNT_BALANCE_SAVINGS}`, () => {
    const acc = new SavingsAccount({
      firstName: 'Peter',
      lastName: 'Ndukwe',
      middleName: 'Onum',
      otherNames: [],
      accountNumber: '0061215518',
    });
  
    expect(acc.maxBalance).toEqual(Constants.MAX_ACCOUNT_BALANCE_SAVINGS);
  });
});

describe('CurrentAccount', () => {
  it(`will always have a max value of ${Constants.MAX_ACCOUNT_BALANCE_CURRENT}`, () => {
    const acc = new CurrentAccount({
      firstName: 'Peter',
      lastName: 'Ndukwe',
      middleName: 'Onum',
      otherNames: [],
      accountNumber: '0061215518',
    });
  
    expect(acc.maxBalance).toEqual(Constants.MAX_ACCOUNT_BALANCE_CURRENT);
  });
});
