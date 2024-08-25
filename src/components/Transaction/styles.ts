import styled, { css } from 'styled-components/native'

interface ITransaction {
  type: 'income' | 'outcome'
}

export const Container = styled.View<ITransaction>`
  position: relative;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  padding: 16px;
  padding-left: 24px;
  border: 1px solid ${({ theme }) => theme.COLORS.SLATE_300};
  border-radius: 8px;
  overflow: hidden;
  gap: 4px;
`

export const TypeIndicator = styled.View<ITransaction>`
  position: absolute;
  top: 0;
  left: 0;
  width: 8px;
  height: 500px;
  background-color: ${({ theme, type }) =>
    type === 'income' ? theme.COLORS.GREEN_600 : theme.COLORS.RED_600};
`

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD};
    font-family: ${theme.FONT_FAMILY.SEMI_BOLD};
    color: ${theme.COLORS.BLACK};
  `};
`

export const Amount = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.BLACK};
  `};
`

export const Subtitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.XS};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.SLATE_500};
  `};
`
