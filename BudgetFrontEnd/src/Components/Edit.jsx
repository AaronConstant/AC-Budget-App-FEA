import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export default function Edit() {
  const API = import.meta.env.VITE_BASE_URL;
  const navigate = useNavigate();
  const { index } = useParams();
  const [editTransaction, setEditTransaction] = useState({
    transaction: "",
    id: "",
    amount: "",
    date: "",
    from: "",
    category: ""
  });

  useEffect(() => {
    fetch(`${API}/${index}`)
      .then(res => res.json())
      .then(res => setEditTransaction(res))
      .catch(err => console.log(err));
  }, [API, index]);

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`${API}/${index}`, {
      method: "PUT",
      body: JSON.stringify(editTransaction),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(() => navigate(`/transactions/${index}`))
      .catch(err => console.error(err));
  };

  const monitorChange = (e) => {
    setEditTransaction((prevState) => ({
      ...prevState, [e.target.name]: e.target.value
    }));
  };

  if (!editTransaction) return <div>Loading Entry...</div>;

  return (
    <div>
      <form onSubmit={ handleSubmit }>
        <fieldset>
          <legend>Edit Transactions</legend>
          <label htmlFor="transaction">Transaction for:</label>
          <input
            type="text"
            placeholder="Transaction"
            name="transaction"
            id="transaction"
            value={ editTransaction.transaction }
            onChange={ monitorChange }
            required
          />
          <br />
          <label htmlFor="date">Date:</label>
          <input
            type="date"
            placeholder="YYYY/MM/DD"
            name="date"
            id="date"
            value={ editTransaction.date }
            onChange={ monitorChange }
            required
          />
          <br />
          <label htmlFor="amount">Amount:</label>
          <input
            type="text"
            placeholder="Amount"
            name="amount"
            id="amount"
            value={ editTransaction.amount }
            onChange={ monitorChange }
            required
          />
          <br />
          <label htmlFor="from">Business:</label>
          <input
            type="text"
            placeholder="From"
            name="from"
            id="from"
            value={ editTransaction.from }
            onChange={ monitorChange }
            required
          />
          <br />
          <label htmlFor="category">Category:</label>
          <select
            id="category"
            name="category"
            value={ editTransaction.category }
            onChange={ monitorChange }
            required
          >
            <option value="Income">Income</option>
            <option value="Savings">Savings</option>
            <option value="Pet">Pet</option>
            <option value="Groceries">Groceries</option>
            <option value="Credit Card">Credit Card Payment</option>
            <option value="Entertainment">Entertainment</option>
            <option value="Other">Other</option>
          </select>
          <br />
          <input type="submit" value="Confirm Edit Entry" />
        </fieldset>
      </form>
    </div>
  );
}

