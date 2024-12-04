import { CompanyAccount } from "./class/CompanyAccount";
import { PeopleAccount } from "./class/PeopleAccount";

const peopleAccount: PeopleAccount = new PeopleAccount(1, "Nico", 10)
console.log(peopleAccount.name);
peopleAccount.name = "Fabio Maluco"
console.log(peopleAccount.name)
console.log("------------------------------------");
console.log("------------------------------------");

// peopleAccount.setAccountNumber(911)
console.log(peopleAccount.setAccountNumber(911));
console.log("------------------------------------");
console.log("------------------------------------");

console.log(peopleAccount.getAccountNumber());
console.log("------------------------------------");
console.log("------------------------------------");

console.log(peopleAccount);
peopleAccount.deposit()
console.log("------------------------------------");
console.log("------------------------------------");


const peopleAccount2: PeopleAccount = new PeopleAccount(33, "Fabin", 10)
peopleAccount2.deposit()
console.log("------------------------------------");

const companyAcconuntDeposit: CompanyAccount = new CompanyAccount("DIO", 50)
companyAcconuntDeposit.deposit()