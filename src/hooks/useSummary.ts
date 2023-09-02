/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useContext } from "react";
import { TransactionsContext } from "../contexts/TransactionsContext";
/* eslint-disable @typescript-eslint/no-unsafe-argument */

export function useSummary() {
  const { transactions } = useContext(TransactionsContext);

  const summary = transactions.reduce(
    (acc, transaction) => {

      if(transaction.type === 'income') {
        acc.income += transaction.price;
        acc.total += transaction.price;
      } else {
        acc.outcome += transaction.price;
        acc.total -= transaction.price;
      }

      return acc;
    }, 
    { 
      income: 0, 
      outcome: 0, 
      total: 0 
    } 
    );

    return summary;

}