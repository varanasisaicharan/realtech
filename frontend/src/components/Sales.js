import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Sales = () => {
  const [sales, setSales] = useState([]);
  const [product, setProduct] = useState('');
  const [customer, setCustomer] = useState('');
  const [quantity, setQuantity] = useState('');

  useEffect(() => {
    fetchSales();
  }, []);

  const fetchSales = async () => {
    const res = await axios.get('/api/sales');
    setSales(res.data);
  };

  const addSale = async () => {
    await axios.post('/api/sales', { product, customer, quantity: parseInt(quantity) });
    setProduct('');
    setCustomer('');
    setQuantity('');
    fetchSales();
  };

  return (
    <div>
      <h2>Sales</h2>
      <ul>
        {sales.map(s => <li key={s.id}>{s.customer} bought {s.quantity} x {s.product}</li>)}
      </ul>
      <input placeholder="Product" value={product} onChange={e => setProduct(e.target.value)} />
      <input placeholder="Customer" value={customer} onChange={e => setCustomer(e.target.value)} />
      <input placeholder="Quantity" value={quantity} onChange={e => setQuantity(e.target.value)} />
      <button onClick={addSale}>Add Sale</button>
    </div>
  );
};

export default Sales;