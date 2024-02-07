// Create a function to calculate array of student data

const calculateStudentList = (list) => {
    const scores = list.map(student => student.Score);
    const ages = list.map(student => student.Age);

    let maxScore = scores[0];
    let minScore = scores[0];
    let sumScores = 0;

    let maxAge = ages[0];
    let minAge = ages[0];
    let sumAges = 0;

    for (let i = 0; i < scores.length; i++) {
        sumScores += scores[i];
        if (scores[i] > maxScore) {
            maxScore = scores[i];
        }
        if (scores[i] < minScore) {
            minScore = scores[i];
        }

        sumAges += ages[i];
        if (ages[i] > maxAge) {
            maxAge = ages[i];
        }
        if (ages[i] < minAge) {
            minAge = ages[i];
        }
    }

    const avgScore = sumScores / list.length;
    const avgAge = sumAges / list.length;

    return {
        score: {
            highest:maxScore,
            lowest: minScore,
            average: avgScore,
        },
        age: {
            highest: maxAge,
            lowest: minAge,
            average: avgAge,
        }
    }
}

console.log(calculateStudentList([
    {
        Name: "Alice",
        Email: "alice@email.com",
        Age: 68,
        Score: 85
    },
    {
        Name: "Bob",
        Email: "bob@email.com",
        Age: 23,
        Score: 92
    },
    {
        Name: "Charlie",
        Email: "charlie@email.com",
        Age: 25,
        Score: 78
    },
]).score);

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

// 

var majorityElement = function (nums) {
    const seen = {};
    let maxKey = 0;
    let maxValue = 0;

    for (let value of nums) {
        seen[value] = (seen[value] || 0) + 1;

    }

    for (const key in seen) {
        if (maxValue === 0 || seen[key] > maxValue) {
            maxKey = key;
        }
    }

    return maxKey;
};

console.log(majorityElement([3, 3, 4]))