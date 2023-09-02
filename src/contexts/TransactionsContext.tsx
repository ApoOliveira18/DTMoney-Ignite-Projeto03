/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { ReactNode, createContext } from "react";
import { useEffect, useState } from "react";
import { api } from "../lib/axios";

interface Transaction {
  id: number;
  description: string;
  type: 'income' | 'outcome';
  price: number;
  category: string;
  createdAt: string;
  children: unknown;
}

interface CreateTransationInput {
  description: string;
  price: number;
  category: string;
  type: 'income' | 'outcome';
}

interface TransactionContextType {
  transactions: Transaction[];
  fetchTransactions: (query?: string) => Promise<void>;
  createTransaction: (data: CreateTransationInput ) => Promise<void>;
}

interface TransactionsProviderProps {
  children: ReactNode;
}



// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
export const TransactionsContext = createContext({} as TransactionContextType);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransations] = useState<Transaction[]>([]);

  async function fetchTransactions(query?: string) {
      const response = await api.get('transactions', {
        params: {
          _sort: 'createdAt',
          _order: 'desc',
          q: query,
        }
      })     

       setTransations(response.data);
   } 

  async function createTransaction(data: CreateTransationInput ) {
    const { description, price, category, type } = data;

    const response = await api.post('transactions', {
      description,
      price,
      category,
      type,
      createdAt: new Date(),
    })
  
    setTransations(state => [response.data, ...state]);
  }

 useEffect(() => {     
   void fetchTransactions();
 }, [])


  return (
    <TransactionsContext.Provider 
      value={{ 
        transactions,
        fetchTransactions,
        createTransaction,
      }}>
      {children}
    </TransactionsContext.Provider>
  )
}