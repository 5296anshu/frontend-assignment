// Constructor function for BankAccount
function BankAccount(accountNumber, name, type, balance) {
    this.accountNumber = accountNumber;
    this.name = name;
    this.type = type;
    this.balance = balance;
    this.active = true; // Account is active by default
}

// Methods added to the BankAccount prototype
BankAccount.prototype.deposit = function (amount) {
    if (amount > 0) {
        this.balance += amount;
        console.log(`Deposited $${amount}. New balance: $${this.balance}`);
    } else {
        console.log("Invalid deposit amount.");
    }
};

BankAccount.prototype.withdraw = function (amount) {
    if (this.active && amount > 0 && amount <= this.balance) {
        this.balance -= amount;
        console.log(`Withdrawn $${amount}. New balance: $${this.balance}`);
    } else {
        console.log("Invalid withdrawal amount or inactive account.");
    }
};

BankAccount.prototype.checkBalance = function () {
    console.log(`Account Balance: $${this.balance}`);
};

BankAccount.prototype.isActive = function () {
    return this.active;
};

// Function to calculate and return the total balance of all active accounts
function getTotalBalance(accounts) {
    let totalBalance = 0;
    for (let account of accounts) {
        if (account.isActive()) {
            totalBalance += account.balance;
        }
    }
    return totalBalance;
}

// Example usage
let account1 = new BankAccount(1, "Anshu kumari", "Savings", 1000);
let account2 = new BankAccount(2, "Anshu kumari", "Checking", 500);

account1.deposit(200);
account1.withdraw(100);

account2.deposit(300);
account2.withdraw(200);

account1.checkBalance();
account2.checkBalance();

console.log("Is account1 active?", account1.isActive());
console.log("Is account2 active?", account2.isActive());

let totalBalance = getTotalBalance([account1, account2]);
console.log("Total balance of active accounts: $", totalBalance);
