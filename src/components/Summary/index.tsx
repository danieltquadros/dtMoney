import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from 'phosphor-react'

// Global hooks
import { useSummary } from '../../hooks/useSummary'

// Utils
import { priceFormatter } from '../../utils/formatter'

// Styles
import { SummaryContainer, SummaryCard } from './styles'

const Summary = () => {
  const summary = useSummary()

  return (
    <SummaryContainer>
      <SummaryCard>
        <header>
          <span>Income entry</span>
          <ArrowCircleUp size={32} color="#00B37E" />
        </header>
        <strong>{priceFormatter.format(summary.income)}</strong>
      </SummaryCard>
      <SummaryCard>
        <header>
          <span>Income exit</span>
          <ArrowCircleDown size={32} color="#F75A68" />
        </header>
        <strong>{priceFormatter.format(summary.outcome)}</strong>
      </SummaryCard>
      <SummaryCard variant="green">
        <header>
          <span>Total</span>
          <CurrencyDollar size={32} color="#FFF" />
        </header>
        <strong>{priceFormatter.format(summary.total)}</strong>
      </SummaryCard>
    </SummaryContainer>
  )
}

export default Summary
