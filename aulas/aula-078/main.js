//Superclass

function Account(agency, account, balance) {
  this.agency = agency;
  this.account = account;
  this.balance = balance;
}

Account.prototype.withdraw = function(val) {
  if (val > this.balance) {
    console.log(`Saldo insuficiente: ${this.balance}`)
    return;
  }

  this.balance -= val;
  this.showBalance();
};

Account.prototype.deposit = function(val) {
  this.balance += val;
  this.showBalance();
};

Account.prototype.showBalance = function() {
  console.log(`\nAg/c: ${this.agency}/${this.account} | Saldo: R$${this.balance.toFixed(2)}\n`);
};

function CurrentAccount(agency, account, balance, limit) {
  Account.call(this, agency, account, balance);
  this.limit = limit;
}

CurrentAccount.prototype = Object.create(Account.prototype);
CurrentAccount.prototype.constructor = CurrentAccount;

CurrentAccount.prototype.withdraw = function(val) {
  if (val > this.balance + this.limit) {
    console.log(`Saldo insuficiente: ${this.balance}`)
    return;
  }

  this.balance -= val;
  this.showBalance();
};

function SavingAccount(agency, account, balance) {
  Account.call(this, agency, account, balance);
}

SavingAccount.prototype = Object.create(Account.prototype);
SavingAccount.prototype.constructor = SavingAccount;


const currentAccount = new CurrentAccount(11, 22, 0, 100);
currentAccount.deposit(10);
currentAccount.withdraw(110);
currentAccount.withdraw(1);
console.log();

const savingAccount = new SavingAccount(12, 33, 0)
savingAccount.deposit(10);
savingAccount.withdraw(110);
savingAccount.withdraw(1);
