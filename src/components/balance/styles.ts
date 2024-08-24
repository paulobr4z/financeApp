import styled, { css } from 'styled-components/native'

export const Container = styled.View`
  padding: 16px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.COLORS.SLATE_300};
  margin-top: 12px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  gap: 12px;
`

export const BalanceTitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_FAMILY.SEMI_BOLD};
    color: ${theme.COLORS.BLACK};
  `};
`

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
`

export const Spacer = styled.View`
  flex: 1;
`

interface ITransactionIcon {
  type: 'income' | 'outcome'
}

export const TransactionButton = styled.TouchableOpacity<ITransactionIcon>`
  width: 32px;
  height: 32px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme, type }) =>
    type === 'income' ? theme.COLORS.GREEN_600 : theme.COLORS.RED_600};
  border-radius: 200px;
  margin-right: 8px;
`

export const TransactionTypeTitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE[10]}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.SLATE_500};
  `};
`

export const TransactionTypeContent = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.XS}px;
    font-family: ${theme.FONT_FAMILY.SEMI_BOLD};
    color: ${theme.COLORS.BLACK};
  `};
`
