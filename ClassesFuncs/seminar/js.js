// // Первое задание

// class BankAccount {
//     #balance = 0;

//     constructor(balance) {
//         if (balance < 0) {
//             throw new Error("Баланс не может быть отрицательным")
//         }

//         this.#balance = balance;
//     }

//     get balance() { return this.#balance; }

//     deposit = (amount) => {
//         if (amount <= 0) {
//             throw new Error("Отрицательное колличество внесенных денег")
//         }
//         this.#balance += amount;
//     }

//     withdraw = (amount) => {
//         if (amount <= 0) {
//             throw new Error("Отрицательное колличество внесенных денег ")
//         }
//         if (this.#balance - amount < 0) {
//             throw new Error("не хватает денег на счету")
//         }
//         this.#balance -= amount;
//     }

// }

// let account = new BankAccount(500);
// console.log(account.balance);

// account.deposit(200);
// console.log(account.balance);

// account.withdraw(100);
// console.log(account.balance);



// class User {
//     #name = ""
//     #surname = ""

//     constructor(name, surname) {
//         this.#name = name
//         this.#surname = surname
//     }

//     get name() {
//         return this.#name
//     }

//     get surname() {
//         return this.#surname
//     }
// }

// class PremiumUser extends User {
//     constructor(name, surname) {
//         super(name, surname)
//     }
//     premiumAccount = null;

//     setPremiumAccount() {
//         this.premiumAccount = new Date().setFullYear(new Date().getFullYear() + 1)
//     }
// }

// class RegularUser extends User {
//     constructor(name, surname) {
//         super(name, surname)
//     }
// }

// function getAccountInfo(user) {
//     if (user instanceof PremiumUser) {
//         console.log(
//             `Премиум аккаунт действителен до ${new Date(user?.premiumAccount).getFullYear()}` ??
//              'Информация отсутсвует', 
//             user.name, 
//             user.surname)
//     }
//     else if (user instanceof RegularUser) {
//         console.log(`Пользователь без премиум аккаунта`, user.name, user.surname);
//     }
//     else {
//         console.log('Тип пользователя не опеределен')
//     }
// }

// const regular = new RegularUser('Вася','Иванов');
// const premium = new PremiumUser('Петя','Сидоров');

// premium.setPremiumAccount();
// const premiumLim = new PremiumUser('Ваня', "Petrov");

// getAccountInfo(regular)
// getAccountInfo(premium)
// getAccountInfo(premiumLim)

