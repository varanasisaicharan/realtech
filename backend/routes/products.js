const express = require('express');
const router = express.Router();

let products = [
    { id: 1, name: 'Laptop', price: 750 },
    { id: 2, name: 'Phone', price: 500 }
];

router.get('/', (req, res) => {
    res.json(products);
});

router.post('/', (req, res) => {
    const newProduct = { id: products.length + 1, ...req.body };
    products.push(newProduct);
    res.json(newProduct);
});

module.exports = router;