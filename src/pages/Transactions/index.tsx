/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { useContext } from "react";
import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./components/SearchForm";
import { PriceHighLigh, TransactionsContainer, TransactionsTable } from "./styles";
import { TransactionsContext } from "../../contexts/TransactionsContext";
import { dateFormatter, priceFormatter } from "../../utils/formatter";

export function Transactions() { 

  const { transactions } = useContext(TransactionsContext);    

  return (
    <div>
      <Header />
      <Summary />

      <TransactionsContainer>
        <SearchForm/>
        <TransactionsTable>
          <tbody>
           
            {transactions.map( transaction =>{
              return(
                // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                <tr key={transaction.id}>
                  <td width="50%">{transaction.description}</td>
                  <PriceHighLigh variant={transaction.type}>                   
                    <td>
                      {transaction.type === 'outcome' &&  '- '}
                      {priceFormatter.format(transaction.price)}</td>
                  </PriceHighLigh>
                  
                  <td>{transaction.category}</td>
                  <td>{dateFormatter.format(new Date(transaction.createdAt))}</td>
                </tr>
              )
            })} 
          </tbody>
        </TransactionsTable>
        </TransactionsContainer>
    </div>
  )
}