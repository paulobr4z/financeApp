import { SafeAreaView } from 'react-native-safe-area-context'
import styled, { css } from 'styled-components/native'

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.SLATE_200};
  padding: 32px 24px 24px 24px;
`

export const Header = styled.View`
  gap: 8px;
`

export const NewTransactionContainer = styled.View`
  margin-top: 32px;
`

export const NewTransactionTitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.LG};
    font-family: ${theme.FONT_FAMILY.SEMI_BOLD};
    color: ${theme.COLORS.BLACK};
    line-height: ${theme.LINE_HEIGHT.XL};
  `};
  padding: 0 4px;
`

export const ButtonTypeContainer = styled.View`
  flex-direction: row;
  gap: 12px;
`

interface ITransactionTypeButton {
  selected: boolean
  type?: 'income' | 'outcome'
}

export const TransactionTypeButton = styled.TouchableOpacity<ITransactionTypeButton>`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 8px 32px;
  border-radius: 8px;
  margin-top: 8px;
  background-color: ${({ theme, type }) =>
    type === 'income' ? theme.COLORS.GREEN_600 : theme.COLORS.RED_600};
  border: 2px solid
    ${({ theme, selected }) =>
      selected ? theme.COLORS.WHITE : theme.COLORS.SLATE_200};
`

export const TransactionTypeText = styled.Text<ITransactionTypeButton>`
  ${({ theme, selected }) => css`
    font-size: ${theme.FONT_SIZE.MD};
    font-family: ${selected
      ? theme.FONT_FAMILY.BOLD
      : theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.WHITE};
    line-height: ${theme.LINE_HEIGHT.MD};
  `};
`

export const CategoryContainer = styled.View`
  margin-top: 32px;
`

export const CategoryButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border: 1px solid ${({ theme }) => theme.COLORS.SLATE_300};
  border-radius: 8px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  padding: 8px 12px;
  margin-top: 8px;
`

export const CategoryText = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD};
    font-family: ${theme.FONT_FAMILY.SEMI_BOLD};
    color: ${theme.COLORS.BLACK};
  `};
`

export const TransactionTypeTitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.LG};
    font-family: ${theme.FONT_FAMILY.SEMI_BOLD};
    color: ${theme.COLORS.BLACK};
    line-height: ${theme.LINE_HEIGHT.XL};
  `};
  padding: 0 4px;
`

export const TypeContainer = styled.View`
  margin-top: 32px;
`
