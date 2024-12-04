# POO
    - Programação Orientada a Objetos

    Utiliza a classe -> a classe é a especie de uma forma para que possamos estanciar mais de um objeto
    - A classe é um modelo para que possamos criar objetos
    (dessa forma a classe constructor fica implicita ai consigo chumbar um valor se eu quero dinamico deve fazer de outra forma)    
    
   # NAO DINAMICO

    class User{
    // biome-ignore lint/style/noInferrableTypes: <explanation>
    name: string = 'Fabio'
    // biome-ignore lint/style/noInferrableTypes: <explanation>
    age: number = 42

    showName(){
        console.log(this.name)
    }
   }

   # DINAMICO
   class User2{
    name: string = 'Fabio'
    age: number = 42

    constructor(name: string, age: number){
        this.name = name
        this.age = age
    }
    
    showName(){
        console.log(this.name)
    }
    }
    
    utiliza o metodo constructor para passar os valores
    const userN2 = new User2("Fabio", 43)    
    userN2.showName()

   # Clases e tipos ()
   - Classe é um tipo
    // Dio Banking
    // name, accountNumber
    // depositar, sacar

    class Account {
        name: string;
        accountNumber: number;

        constructor(name: string, accountNumber: number) {
            this.name = name;
            this.accountNumber = accountNumber;
        }

        deposit() {
            console.log(`Depositando`);
        }

        withdraw() {
            console.log(`Sacando`);
        }
    }

    const newAccount: Account = new Account("João", 1);
    console.log(newAccount);

    const account: Account = new Account("Fabio", 200);
    account.deposit();
 
   # Classes e tipos (heranca) ( verificar dif entre herenca e abstracao )
    class Account { 
        name: string;
        accountNumber: number;

        constructor(name: string, accountNumber: number) {
            this.name = name;
            this.accountNumber = accountNumber;
        }

        deposit = () => {
            console.log("`Depositando`");
        }

        withdraw= () => {
            console.log("`Sacando`");
        }
    }

    // Neste classe não estamos herdando(extends) nenhuma outra classe
    // class Admin {
    //     balance: number

    //     constructor() {
    //         this.balance = 20;
    //     }

    //     getBalance = () => {
    //         console.log(this.balance);
    //     }
    // }

    // Neste classe estamos herdando(extends) da classe Account
    class Admin extends Account {
        balance: number

        constructor(name: string, accountNumber: number) {
            super(name, accountNumber); 
            this.balance = 20;
        }

        getBalance = () => {
            console.log(this.balance);
        }
    }

    const adminAccount: Admin = new Admin("Fabinho", 2);
    console.log(adminAccount);

    const account: Account = new Account("João", 200);
    // account.deposit();
    console.log(account);

    # Classes e tipos (abstrata) (Herda da classe Account tudo que ela tem mais o que tem na classe PeopleAccount)
    abstract class Account {
	name: string;
	accountNumber: number;
	balance = 0;

	constructor(name: string, accountNumber: number) {
		this.name = name;
		this.accountNumber = accountNumber;
	}

	deposit = () => {
		console.log("`Depositando`");
	};

	withdraw = () => {
		console.log("`Sacando`");
	};

	getBalance = () => {
		console.log(this.balance);
	};
}

class PeopleAccount extends Account {
    doc_id: number;

    constructor( doc_id: number, name: string, accountNumber: number) {
        super(name, accountNumber);
        this.doc_id = doc_id;
    }
}

const peopleAccount: PeopleAccount = new PeopleAccount(1, "Nico", 10)
console.log(peopleAccount);

# Classes e tipos (abstrata)
// Dio Banking
// name, accountNumber
// depositar, sacar

abstract class Account {
	name: string;
	accountNumber: number;
	balance = 0;

	constructor(name: string, accountNumber: number) {
		this.name = name;
		this.accountNumber = accountNumber;
	}

	deposit = () => {
		console.log("`Depositando`");
	};

	withdraw = () => {
		console.log("`Sacando`");
	};

	getBalance = () => {
		console.log(this.balance);
	};
}

class PeopleAccount extends Account {
    doc_id: number;

    constructor( doc_id: number, name: string, accountNumber: number) {
        super(name, accountNumber);
        this.doc_id = doc_id;
    }
}


class CompanyAccount extends Account {
    
    // biome-ignore lint/complexity/noUselessConstructor: <explanation>
        constructor(name: string, accountNumber: number) {
        super(name, accountNumber);
    }

    getLoan = () => {
        console.log("`Emprestimo`");
    }
}

const peopleAccount: PeopleAccount = new PeopleAccount(1, "Nico", 10)
console.log(peopleAccount);

const companyAcconunt: CompanyAccount = new CompanyAccount("DIO", 50)
console.log(companyAcconunt);

# Classes e tipos (polimorfismo) 
    -> estancia a classe e altera um metodos a sua assinatura ou seu retorno

export abstract class Account {
	name: string;
	accountNumber: number;
	balance = 0;

	constructor(name: string, accountNumber: number) {
		this.name = name;
		this.accountNumber = accountNumber;
	}

	deposit = (): void => {
		console.log("Você depositou");
	};

	withdraw = (): void => {
		console.log("Você sacou");
	};

	getBalance = (): void => {
		console.log(this.balance);
	};
}

import { CompanyAccount } from "./class/CompanyAccount";
import { PeopleAccount } from "./class/PeopleAccount";

const peopleAccount: PeopleAccount = new PeopleAccount(1, "Nico", 10)
console.log(peopleAccount);
peopleAccount.deposit()

const companyAcconunt: CompanyAccount = new CompanyAccount("DIO", 50)
console.log(companyAcconunt);
companyAcconunt.deposit()

const companyAcconuntDeposit: CompanyAccount = new CompanyAccount("DIO", 50)
companyAcconuntDeposit.deposit()

# Permissão dentro das nossas classes
    -> public
        -> pode ser acessado por qualquer um
    -> protected
        -> pode ser acessado por qualquer um dentro da classe e por classes que a herdam
    -> private
        -> pode ser acessado apenas dentro da classe
    
    Exemplo: 
    export abstract class Account {
	public name: string;
	private accountNumber: number;
	balance = 0;

	constructor(name: string, accountNumber: number) {
		this.name = name;
		this.accountNumber = accountNumber;
	}

    setAccountNumber = (accountNumber: number): string => {
		this.accountNumber = accountNumber;
        return "Conta Alterada com sucesso";
	}

    getAccountNumber = (): number => {
        return this.accountNumber
	}

	deposit = (): void => {
		console.log("Você depositou");
	};

	withdraw = (): void => {
		console.log("Você sacou");
	};

	getBalance = (): void => {
		console.log(this.balance);
	};
}

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

# operador readonly
    -> permite que o valor seja apenas lido e não alterado
    exeemplo:
    readonly name: string;

    nessa caso ja vai reclamar pq o valor não pode ser alterado

    const peopleAccount: PeopleAccount = new PeopleAccount(1, "Nico", 10)
    console.log(peopleAccount.name);
    peopleAccount.name = "Fabio Maluco"
    console.log(peopleAccount.name)
    console.log("------------------------------------");
    console.log("------------------------------------");
