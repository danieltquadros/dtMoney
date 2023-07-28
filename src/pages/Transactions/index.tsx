import { useContextSelector } from 'use-context-selector'

// MUI
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'

// Global components
import Header from '../../components/Header'
import Summary from '../../components/Summary'

// Local components
import SearchForm from './components/SearchForm'

// Styles
import {
  PriceHighlight,
  TransactionsContainer,
  TransactionsTable,
} from './styles'
import { TransactionsContext } from '../../contexts/TransactionContext'
import { dateFormatter, priceFormatter } from '../../utils/formatter'

const Transactions = () => {
  const transactions = useContextSelector(TransactionsContext, (context) => {
    return context.transactions
  })
  const theme = useTheme()
  const xs = useMediaQuery(theme.breakpoints.only('xs'))

  console.log(xs)

  return (
    <div>
      <Header />
      <Summary />
      <TransactionsContainer>
        <SearchForm />
        <TransactionsTable>
          <tbody>
            {transactions.map((transaction) => {
              if (!xs) {
                return (
                  <tr key={transaction.id}>
                    <td width="50%">{transaction.description}</td>
                    <td>
                      <PriceHighlight variant={transaction.type}>
                        {transaction.type === 'outcome' && '- '}
                        {priceFormatter.format(transaction.price)}
                      </PriceHighlight>
                    </td>
                    <td>{transaction.category}</td>
                    <td>
                      {dateFormatter.format(new Date(transaction.createdAt))}
                    </td>
                  </tr>
                )
              } else {
                return (
                  <tr key={transaction.id}>
                    <td>
                      <span>{transaction.description}</span>
                      <PriceHighlight variant={transaction.type}>
                        {transaction.type === 'outcome' && '- '}
                        {priceFormatter.format(transaction.price)}
                      </PriceHighlight>
                    </td>
                    <td>
                      <span>{transaction.category}</span>
                      <span>
                        {dateFormatter.format(new Date(transaction.createdAt))}
                      </span>
                    </td>
                  </tr>
                )
              }
            })}
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  )
}

export default Transactions
