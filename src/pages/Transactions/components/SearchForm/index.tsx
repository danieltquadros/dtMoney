import { useContextSelector } from 'use-context-selector'
import { MagnifyingGlass } from 'phosphor-react'

// Form tools
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

// Context
import { TransactionsContext } from '../../../../contexts/TransactionContext'

// Styles
import { SearchFormContainer } from './styles'

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

const SearchForm = () => {
  const getTransactions = useContextSelector(TransactionsContext, (context) => {
    return context.getTransactions
  })

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  })

  const handleSearchTransactions = async (data: SearchFormInputs) => {
    await getTransactions(data.query)
  }

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchTransactions)}>
      <input
        type="text"
        placeholder="Search for transactions"
        {...register('query')}
      />
      <button type="submit" disabled={isSubmitting}>
        <MagnifyingGlass />
        Search
      </button>
    </SearchFormContainer>
  )
}

export default SearchForm
