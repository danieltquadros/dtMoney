import { ReactNode, createContext, useEffect, useState } from 'react'

// Services
import { getTransactionsRequest } from '../services/api/transactions'

interface Transaction {
  id: number
  description: string
  type: 'income' | 'outcome'
  price: number
  category: string
  createdAt: string
}

interface TransactionContextType {
  transactions: Transaction[]
}

export const TransactionsContext = createContext({} as TransactionContextType)

interface TransactionsProviderProps {
  children: ReactNode
}

const TransactionsProvider = ({ children }: TransactionsProviderProps) => {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  const loadTransactions = async () => {
    try {
      const response = await getTransactionsRequest()
      setTransactions(response)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    loadTransactions()
  }, [])

  return (
    <TransactionsContext.Provider value={{ transactions }}>
      {children}
    </TransactionsContext.Provider>
  )
}

export default TransactionsProvider
