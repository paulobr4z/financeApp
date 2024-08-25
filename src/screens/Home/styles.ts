import { SafeAreaView } from 'react-native-safe-area-context'
import styled, { css } from 'styled-components/native'

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.SLATE_200};
  padding: 24px;
`
export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  padding-top: 8px;
`

export const UserName = styled.Text`
  padding-left: 8px;
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM};
    font-family: ${theme.FONT_FAMILY.SEMI_BOLD};
    color: ${theme.COLORS.BLACK};
  `};
`
