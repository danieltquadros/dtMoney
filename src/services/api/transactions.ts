import { api } from '../../lib/axios'

interface CreateTransactionInput {
  description: string
  price: number
  category: string
  type: 'income' | 'outcome'
  createdAt: Date
}

export async function getTransactionsRequest(query: string) {
  try {
    const response = await api.get('/transactions', {
      params: {
        _sort: 'createdAt',
        _order: 'desc',
        q: query,
      },
    })
    return response?.data
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    return error?.response
  }
}

export async function createTransactionRequest(data: CreateTransactionInput) {
  try {
    const response = await api.post('/transactions', data)
    return response?.data
  } catch (error: any) {
    return error?.response
  }
}
