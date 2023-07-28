import { css, styled } from 'styled-components'

export const SummaryContainer = styled.section`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  margin-top: -5rem;

  @media (max-width: 1224px) {
    max-width: 900px;
  }

  @media (max-width: 964px) {
    max-width: 768px;
  }

  @media (max-width: 800px) {
    max-width: 736px;
    gap: 1rem;
  }

  @media (max-width: 748px) {
    max-width: 672px;
  }

  @media (max-width: 688px) {
    max-width: 588px;
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    max-width: 360px;
    grid-template-columns: repeat(1, 1fr);
  }
`

interface SummaryCardProps {
  variant?: 'green'
}

export const SummaryCard = styled.div<SummaryCardProps>`
  background: ${(props) => props.theme['gray-600']};
  border-radius: 6px;
  padding: 2rem;

  @media (max-width: 800px) {
    padding: 1rem;
  }

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${(props) => props.theme['gray-300']};
  }

  strong {
    display: block;
    margin-top: 1rem;
    font-size: 2rem;
  }

  ${(props) =>
    props.variant === 'green' &&
    css`
      background: ${props.theme['green-700']};
    `}
`
