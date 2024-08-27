import styled, { css } from 'styled-components/native'

export const Input = styled.TextInput`
  border: 1px solid ${({ theme }) => theme.COLORS.SLATE_300};
  border-radius: 8px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  padding: 8px 12px;

  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD};
    font-family: ${theme.FONT_FAMILY.SEMI_BOLD};
    color: ${theme.COLORS.BLACK};
    line-height: ${theme.LINE_HEIGHT.MD};
  `};
`
