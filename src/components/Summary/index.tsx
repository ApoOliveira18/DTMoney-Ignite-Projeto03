/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from "phosphor-react";
import { SummaryContainer, SummaryCard } from "./styles";
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { priceFormatter } from "../../utils/formatter";
import { useSummary } from "../../hooks/useSummary";

export function Summary() {

  const summary = useSummary();

  return (
    <SummaryContainer>
     <SummaryCard>
      <header>
        <span>Entradas</span>
        <ArrowCircleUp size={32} color="#00b37e" />
      </header>
      <strong>{priceFormatter.format(summary.income)}</strong>
     </SummaryCard>

     <SummaryCard>
      <header>
        <span>Saídas</span>
        <ArrowCircleDown size={32} color="#f75a68" />
      </header>
      <strong>{priceFormatter.format(summary.outcome)}</strong>
     </SummaryCard>

     <SummaryCard variant="green">
      <header>
        <span>Total</span>
        <CurrencyDollar size={32} color="#ffffff" />
      </header>
      <strong>{priceFormatter.format(summary.total)}</strong>
     </SummaryCard>
    </SummaryContainer>
  );
}