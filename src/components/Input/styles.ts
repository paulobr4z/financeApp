// import { TextInput } from 'react-native'
import styled, { css } from 'styled-components/native'
import MaskInput from 'react-native-mask-input'

export const Input = styled(MaskInput)`
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
