"use client";  // Make sure this is at the top

import TransactionForm from '../components/TransactionForm';

export default function Home() {
  const createTransaction = async (transactionData: any) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/transactions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(transactionData),
    });
    
    if (response.ok) {
      alert('Transaction created successfully!');
    } else {
      alert('Failed to create transaction.');
    }
  };

  return (
    <div className="container">
      <h1>Transaction Management</h1>
      <TransactionForm onSubmit={createTransaction} />
    </div>
  );
}
