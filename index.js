// Create a function to calculate array of student data

const calculateStudentList = (list) => {
    const scores = list.map(student => student.Score);
    const ages = list.map(student => new Date().getFullYear() - new Date(student.Age).getFullYear());

    return {
        score: {
            highest: Math.max(...scores),
            lowest: Math.min(...scores),
            average: scores.reduce((sum, score) => sum + score, 0) / list.length,
        },
        age: {
            highest: Math.max(...ages),
            lowest: Math.min(...ages),
            average: ages.reduce((sum, age) => sum + age, 0) / list.length,
        }
    }
}

console.log(calculateStudentList([
    {
        Name: "Alice",
        Email: "alice@email.com",
        Age: new Date("1995-05-15"),
        Score: 85
    },
    {
        Name: "Bob",
        Email: "bob@email.com",
        Age: new Date("1998-08-20"),
        Score: 92
    },
    {
        Name: "Charlie",
        Email: "charlie@email.com",
        Age: new Date("1993-02-10"),
        Score: 78
    },
]));

// Create a program to create transaction

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}

class Transaction {
    constructor() {
        this.total = 0;
        this.products = [];
    }

    addToCart(product, qty) {
        this.products.push({
            product,
            qty,
        });
        
        this.total += product.price * qty;
    }

    showTotal() {
        console.log(this.total);
    }
}


const ayamGoreng = new Product("Ayam Goreng", 5000);
const nasi = new Product("Nasi", 2000);
const esTeh = new Product("Es Teh", 2000);

const transaction1 = new Transaction();

transaction1.addToCart(ayamGoreng, 4);
transaction1.addToCart(nasi, 2);
transaction1.addToCart(esTeh, 2);

transaction1.showTotal();