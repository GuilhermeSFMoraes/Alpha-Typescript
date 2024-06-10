interface IOrder {
    id: number,
    status: "pending" | "confirmed" | "preparing" | "ready" | "delivered"
}

function listOrder(list: IOrder[]): void {
    let index = 0;
    const interval = setInterval(() => {
        if(index < list.length) {
            const order = list[index];
            console.log(`Item: ${order.id}, Status: ${order.status}`);
            index++;
        }
        else {
            clearInterval(interval);
        }
    }, 3000)
}

const order: IOrder[] = [
    {
        id: 1,
        status: "confirmed"
    },
    {
        id: 2,
        status: "delivered"
    },
    {
        id: 3,
        status: "pending"
    },
    {
        id: 4,
        status: "preparing"
    },
    {
        id: 5,
        status: "ready"
    }
]

listOrder(order)