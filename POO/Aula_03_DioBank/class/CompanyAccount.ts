import { Account } from "./Account";

export class CompanyAccount extends Account {
    
    // biome-ignore lint/complexity/noUselessConstructor: <explanation>
        constructor(name: string, accountNumber: number) {
        super(name, accountNumber);
    }

    getLoan = (): void => {
        console.log("`Emprestimo`");
    }

    deposit = (): void => {
        console.log("A empresa depositou");
    }
}