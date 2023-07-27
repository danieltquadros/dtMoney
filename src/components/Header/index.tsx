import * as Dialog from '@radix-ui/react-dialog'
import { CurrencyCircleDollar } from 'phosphor-react'

// Styles
import {
  HeaderContainer,
  HeaderContent,
  NewTransactionButton,
  IconAndTitleArea,
} from './styles'

// Global components
import NewTransaction from '../modals/NewTransaction'

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <IconAndTitleArea>
          <CurrencyCircleDollar size={50} weight="bold" />
          <span>DT Money</span>
        </IconAndTitleArea>
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <NewTransactionButton>New transaction</NewTransactionButton>
          </Dialog.Trigger>
          <NewTransaction />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  )
}

export default Header
