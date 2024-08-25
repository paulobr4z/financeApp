import styled, { css } from 'styled-components/native'

export const Container = styled.View`
  margin-top: 24px;
`

export const TransactionsListTitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.SEMI_BOLD};
    color: ${theme.COLORS.BLACK};
  `};
  margin-bottom: 8px;
`
