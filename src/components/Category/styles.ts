import styled, { css } from 'styled-components/native'

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  padding: 8px 12px;
  /* border-bottom: 1px solid ${({ theme }) => theme.COLORS.SLATE_300}; */
  border-bottom-width: 1px;
  border-bottom-color: #cbd5e1;
`

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD};
    font-family: ${theme.FONT_FAMILY.SEMI_BOLD};
    color: ${theme.COLORS.BLACK};
  `};
`

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 8;
`
interface ICircle {
  colorCircle: string
}

export const Circle = styled.View<ICircle>`
  width: 16px;
  height: 16px;
  background-color: ${({ colorCircle }) => colorCircle};
  border-radius: 99px;
`
