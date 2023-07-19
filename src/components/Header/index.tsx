import * as Dialog from '@radix-ui/react-dialog'

// Styles
import { HeaderContainer, HeaderContent, NewTransactionButton } from './styles'

// Assets
import logoImg from '../../assets/logo.svg'
import NewTransaction from '../modals/NewTransaction'

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoImg} alt="" />
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
