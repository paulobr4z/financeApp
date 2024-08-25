import styled, { css } from 'styled-components/native'

export const Container = styled.View`
  margin-top: 24px;
`

export const TransactionsListTitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD};
    font-family: ${theme.FONT_FAMILY.SEMI_BOLD};
    color: ${theme.COLORS.BLACK};
  `};
`

export const TransactionsListTitleContainer = styled.TouchableOpacity`
  flex-direction: row;
  gap: 6px;
  margin-bottom: 8px;
  margin-left: 2px;
`
