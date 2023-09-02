import styled from "styled-components";

export const TransactionsContainer = styled.main`
  width: 100%;
  max-width: 1120px;
  margin: 4rem auto 0;
  padding: 0 1.5rem;
`;

export const TransactionsTable = styled.table`
  width: 100%;
  border-collapse: separade;
  border-spacing: 0 0 0.5rem;
  margin-top: 1.5rem; 

  td {
    padding: 1.25rem 2rem;
    background: ${props => props.theme["gray-700"]};
    width: 100vw !important;
    

    &:first-child {
      border-top-left-radius: 2px;
      border-bottom-left-radius: 2px;
    }

    &:last-child {
      border-top-right-radius: 2px;
      border-bottom-right-radius: 2px;
    }
  }  
`;

interface PriceHighLighProps {
  variant: 'income' | 'outcome';
}

export const PriceHighLigh = styled.span<PriceHighLighProps>`
  color: ${props => props.variant === "income" ? props.theme["green-300"] : props.theme["red-300"]};

`;