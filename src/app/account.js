const Constants = require('../utils/constants');

class Account {
  number;
  firstName;
  lastName;
  middleName;
  otherNames;
  balance;
  transactions;
  ownerId;
  type;
  minBalance;
  maxBalance;

  constructor({ firstName, lastName, middleName, otherNames, accountNumber, type }) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.middleName = middleName;
    this.otherNames = otherNames;
    this.number = accountNumber;
    this.type;
    this.balance = 0;
    this.getMaxBalance(type)
  }

  receiveDeposit(amount) {
    this.balance += amount;
  }

  makeWithdrawal() {}

  getMaxBalance(type) {
    if (type === Constants.CURRENT) {
      this.maxBalance = Constants.MAX_ACCOUNT_BALANCE_CURRENT;
    } else if (type === Constants.SAVINGS) {
      this.maxBalance = Constants.MAX_ACCOUNT_BALANCE_SAVINGS;
    }
  }
}

class SavingsAccount extends Account {
  constructor({ firstName, lastName, middleName, otherNames, accountNumber }) {
    super({ firstName, lastName, middleName, otherNames, accountNumber, type: Constants.SAVINGS });
  }
}

class CurrentAccount extends Account {
  constructor({ firstName, lastName, middleName, otherNames, accountNumber }) {
    super({ firstName, lastName, middleName, otherNames, accountNumber, type: Constants.CURRENT });
  }
}

exports.Account = Account;
exports.SavingsAccount = SavingsAccount;
exports.CurrentAccount = CurrentAccount;