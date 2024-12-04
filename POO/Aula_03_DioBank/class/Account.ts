export abstract class Account {
	public name: string;
	private accountNumber: number;
	balance = 0;
    private status = true;

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
        if (this.validateStatus()) {
            console.log("Você depositou");
        }
	};

	withdraw = (): void => {
		console.log("Você sacou");
	};

	getBalance = (): void => {
		console.log(this.balance);
	};

    private validateStatus = (): boolean => {
		if (this.status) {
			return this.status;
		}

        throw Error("Conta Invalida");
    }
}