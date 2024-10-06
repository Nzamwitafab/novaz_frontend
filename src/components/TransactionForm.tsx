"use client"; 

import { useState } from 'react';

type TransactionFormProps = {
  onSubmit: (data: TransactionData) => void;
};

type TransactionData = {
  buyerId: number;
  sellerId: number;
  tokenId: number;
  transactionAmount: number;
  date: string;
  transactionFee: number;
};

const TransactionForm: React.FC<TransactionFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<TransactionData>({
    buyerId: 0,
    sellerId: 0,
    tokenId: 0,
    transactionAmount: 0,
    date: '',
    transactionFee: 0,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="container">
      <h1>Transaction Management</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div>
            <label>Buyer ID:</label>
            <input type="number" name="buyerId" value={formData.buyerId} onChange={handleChange} required />
          </div>
          <div>
            <label>Seller ID:</label>
            <input type="number" name="sellerId" value={formData.sellerId} onChange={handleChange} required />
          </div>
        </div>

        <div className="form-row">
          <div>
            <label>Token ID:</label>
            <input type="number" name="tokenId" value={formData.tokenId} onChange={handleChange} required />
          </div>
          <div>
            <label>Transaction Amount:</label>
            <input type="number" name="transactionAmount" value={formData.transactionAmount} onChange={handleChange} required />
          </div>
        </div>

        <div className="form-row">
          <div>
            <label>Date:</label>
            <input type="date" name="date" value={formData.date} onChange={handleChange} required />
          </div>
          <div>
            <label>Transaction Fee:</label>
            <input type="number" name="transactionFee" value={formData.transactionFee} onChange={handleChange} required />
          </div>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default TransactionForm;
