const express = require('express');
const router = express.Router();

// Sample in-memory data
let customers = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' }
];

// Get all customers
router.get('/', (req, res) => {
    res.json(customers);
});

// Add new customer
router.post('/', (req, res) => {
    const newCustomer = { id: customers.length + 1, ...req.body };
    customers.push(newCustomer);
    res.json(newCustomer);
});

module.exports = router;