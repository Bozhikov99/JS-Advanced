function getTickets(array, criteria) {

    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }

    let tickets = [];

    for (const t of array) {

        let [destination, price, status] = t.split('|');
        price = Number(price);

        let currentTicket = new Ticket(destination, price, status);
        tickets.push(currentTicket);
    }

    tickets = criteria !== 'price' ? tickets.sort((a, b) => a[criteria].localeCompare(b[criteria])) :
        tickets.sort((a, b) => a - b);

    return tickets;
}

console.log(getTickets(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'destination'
));

console.log(getTickets(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'price'
));