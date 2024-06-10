interface IEmployee {
    name: string,
    wageHour: number,
    totalHourWork: number
}

function wageTotalEmployee(employee: IEmployee[]): number{
    let count = 0
    employee.forEach((value) => {
        const wage = value.totalHourWork * value.wageHour;
        count += wage * 30;
    })

    return count;
}

const squadEmployee: IEmployee[] = [
    {
        name: "Guilherme",
        wageHour: 10,
        totalHourWork: 10
    },
    {
        name: "João",
        wageHour: 5,
        totalHourWork: 10
    },
    {
        name: "Maria",
        wageHour: 6,
        totalHourWork: 10
    }
]

console.log(wageTotalEmployee(squadEmployee))