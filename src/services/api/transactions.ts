import axios from 'axios'

export async function getTransactionsRequest() {
  try {
    const response = await axios.get('http://localhost:3333/transactions')
    return response?.data
  } catch (error: any) {
    return error?.response
  }
}
