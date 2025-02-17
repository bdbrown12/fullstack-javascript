class BankAccount {
    #balance;

    constructor(initialBalance) {
        this.#balance = initialBalance;
    }


    //what should a bank account be able to do?

    //deposit
    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
            console.log(`Deposited: $${amount}. New balance: $${this.#balance}`);
        }
    }

    //withdraw
    withdraw(amount) {
        if (amount > 0 && amount <= this.#balance) {
            this.#balance -= amount;
            console.log(`Withdrew $${amount}. New balance: $${this.#balance}`);
        } else {
            console.log("Insufficient funds or invalid amount.");
        }
    }

    getBalance() {
        return `Your balance is $${this.#balance}`;
    }
}

const account = new BankAccount(500);
console.log(account.getBalance()); // "Your balance is $500"
account.deposit(200); // Deposited $200. New balance: $700
account.withdraw(100); // Withdrew $100. New balance: $600
// console.log(account.#balance); // SyntaxError