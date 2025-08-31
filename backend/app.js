const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// API route under /api
app.get('/api', (req, res) => {
  res.send('API is working through Nginx reverse proxy!');
});

// Example API route
app.get('/api/products', (req, res) => {
  res.json([
    { id: 1, name: 'Product A', price: 100 },
    { id: 2, name: 'Product B', price: 200 }
  ]);
});

const PORT = 5000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});