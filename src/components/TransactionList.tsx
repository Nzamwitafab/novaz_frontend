import { useEffect, useState } from 'react';

type Transaction = {
  transactionID: number;
  buyerId: number;
  sellerId: number;
  tokenId: number;
  transactionAmount: number;
  date: string;
  transactionFee: number;
};

const TransactionList: React.FC = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  const fetchTransactions = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/transactions`);
    const data = await response.json();
    setTransactions(data);
  };

  useEffect(() => {
    fetchTransactions();
  }, []);

  return (
    <div>
      <h2>All Transactions</h2>
      <ul>
        {transactions.map((transaction) => (
          <li key={transaction.transactionID}>
            Buyer ID: {transaction.buyerId}, Seller ID: {transaction.sellerId}, Amount: {transaction.transactionAmount}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;
