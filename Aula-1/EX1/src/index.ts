function validateEmail(email: string): boolean {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!regex.test(email)) {
        return false
    }

    return true
}

const email1 = "guilherme@mail.com"
const email2 = "guilherme@mail"

console.log(validateEmail(email1));
console.log(validateEmail(email2));