import { styled } from 'styled-components'

export const HeaderContainer = styled.header`
  background: ${(props) => props.theme['gray-900']};
  padding: 2.5rem 0 7.5rem;
`

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1224px) {
    max-width: 900px;
  }

  @media (max-width: 964px) {
    max-width: 768px;
  }

  @media (max-width: 800px) {
    max-width: 736px;
  }

  @media (max-width: 748px) {
    max-width: 672px;
  }

  @media (max-width: 688px) {
    max-width: 588px;
  }

  @media (max-width: 600px) {
    max-width: 360px;
  }
`

export const IconAndTitleArea = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  & svg {
    color: ${(props) => props.theme['green-500']};
  }

  & span {
    font-size: 1.5rem;
    font-weight: 600;
  }
`

export const NewTransactionButton = styled.button`
  height: 50px;
  border: 0;
  background: ${(props) => props.theme['green-500']};
  color: ${(props) => props.theme.white};
  font-weight: bold;
  padding: 0 1.25rem;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background: ${(props) => props.theme['green-700']};
    transition: background-color 0.2s;
  }
`
