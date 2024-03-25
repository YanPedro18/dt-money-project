import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from "@phosphor-icons/react";
import { CardContainer, CardContent, ContentEntryExit, ContentTotal } from "./styles";
import { priceFormatter } from "../../../Utils/formatter";
import { useSummary } from "../../../hooks/useSummary";




function CardResume() {

    const summary = useSummary();

  return (
    <CardContainer>

      <CardContent>

        <ContentEntryExit>
          <header>
            <span>Entradas</span>
            <ArrowCircleUp size={30} color="#00B37E" />
          </header>
          <strong>{priceFormatter.format(summary.transactionEntrada)}</strong>
        </ContentEntryExit>

        <ContentEntryExit>
          <header>
            <span>Saídas</span>
            <ArrowCircleDown size={30} color="#F75A68" />
          </header>
          <strong>{priceFormatter.format(summary.transactionSaida)}</strong>
        </ContentEntryExit>

        <ContentTotal>
          <header>
            <span>Total</span>
            <CurrencyDollar size={30} />
          </header>
          <strong>{priceFormatter.format(summary.transactionTotal)}</strong>
        </ContentTotal>

      </CardContent>
    </CardContainer>
  )
}

export default CardResume;