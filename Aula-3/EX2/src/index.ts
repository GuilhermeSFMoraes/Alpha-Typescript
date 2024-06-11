class Calculator {
    public sum (value1: number, value2: number): number {
        return value1 + value2;
    }

    public subtraction (value1: number, value2: number): number {
        return value1 - value2;
    }

    public multiplication (value1: number, value2: number): number {
        return value1 * value2;
    }

    public division (value1: number, value2: number): string | number {
        if (value2 === 0) {
            return "Não é possivel fazer a conta com 0";
        }

        return value1 / value2
    }
}

class ScientificCalculator extends Calculator{
    public potentiation (value1: number, value2: number): number {
        return value1 ** value2;
    }

    public factorial (value: number): any {
        if (value < 0) {
            return "Não é possível fazer a conta com números inferiores a 0!";
        }

        if (value === 1 || value === 2) {
            return 1;
        }

        return value * this.factorial(value - 1);
    }
}

class FinancialCalculator extends Calculator {
    public simpleInterest (value: number, percentage: number, time: number): number {
        return value + (value * (percentage / 100) * time);
    }

    public compoundInterest(value: number, percentage:number, time: number): number {
        return value * (1 + (percentage / 100)) ** time;
    }
}

const conta = new Calculator;

console.log(conta.sum(1, 2));
console.log(conta.subtraction(1, 2));
console.log(conta.multiplication(5, 2));
console.log(conta.division(1, 0));
console.log(conta.division(1, 2));

console.log("==========================================");

const cientifica = new ScientificCalculator;

console.log(cientifica.sum(1, 2));
console.log(cientifica.subtraction(1, 2));
console.log(cientifica.multiplication(5, 2));
console.log(cientifica.division(1, 0));
console.log(cientifica.division(1, 2));
console.log(cientifica.potentiation(3, 2));
console.log(cientifica.factorial(1));
console.log(cientifica.factorial(5));

console.log("==========================================");

const financeira = new FinancialCalculator;

console.log(financeira.sum(1, 2));
console.log(financeira.subtraction(1, 2));
console.log(financeira.multiplication(5, 2));
console.log(financeira.division(1, 0));
console.log(financeira.division(1, 2));
// juro simples valor, porcentagem, tempo
console.log(financeira.simpleInterest(1000, 5, 2));
// juro composto valor, porcentagem, tempo
console.log(financeira.compoundInterest(1000, 5, 2));