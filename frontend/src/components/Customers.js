import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Customers = () => {
  const [customers, setCustomers] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    fetchCustomers();
  }, []);

  const fetchCustomers = async () => {
    const res = await axios.get('/api/customers');
    setCustomers(res.data);
  };

  const addCustomer = async () => {
    await axios.post('/api/customers', { name, email });
    setName('');
    setEmail('');
    fetchCustomers();
  };

  return (
    <div>
      <h2>Customers</h2>
      <ul>
        {customers.map(c => <li key={c.id}>{c.name} ({c.email})</li>)}
      </ul>
      <input placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
      <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
      <button onClick={addCustomer}>Add Customer</button>
    </div>
  );
};

export default Customers;