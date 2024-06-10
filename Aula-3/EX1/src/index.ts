class CreateClientes {
    private readonly name: string
    private balance: number

    constructor(name:string, balance:number) {
        this.name = name;
        this.balance= balance;
    }

    public myInformation(): void {
        return console.log(`Olá, ${this.name}! Seu saldo atual é de: R$${(this.balance).toFixed(2)}`);
    }

    public deposit(value: number):void {
        if(value <= 0) {
            return console.log("Informe valores válidos!")
        }

        this.balance += value;

        console.log(`Operação concluída com sucesso! Saldo atual é de R$${(this.balance).toFixed(2)}`);
    }

    public withdraw(value: number): void {
        if (!this.verifyValue(value)) {
            return console.log("Informe valores váçidous ou verifique seu saldo!");
        }

        this.balance -= value;

        console.log(`Operação concluída com sucesso! Saldo atual é de R$${(this.balance).toFixed(2)}`);
    }

    private verifyValue(ammount: number): boolean {
        if (ammount < 0 || ammount > this.balance) {
            return false;
        }

        return true
    }
}

const person = new CreateClientes("Guilherme", 500);

person.myInformation();
person.deposit(500);
person.myInformation();

person.withdraw(100);
person.myInformation();
person.withdraw(1000);
person.myInformation();
