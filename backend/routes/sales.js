const express = require('express');
const router = express.Router();

let sales = [
    { id: 1, product: 'Laptop', customer: 'John Doe', quantity: 1 }
];

router.get('/', (req, res) => {
    res.json(sales);
});

router.post('/', (req, res) => {
    const newSale = { id: sales.length + 1, ...req.body };
    sales.push(newSale);
    res.json(newSale);
});

module.exports = router;