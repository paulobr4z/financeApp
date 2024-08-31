import { SafeAreaView } from 'react-native-safe-area-context'
import styled, { css } from 'styled-components/native'

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.SLATE_200};
  padding: 32px 24px 24px 24px;
`

export const AvatarContainer = styled.View`
  align-items: center;
  justify-content: center;
  gap: 4px;
`

export const Username = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD};
    font-family: ${theme.FONT_FAMILY.SEMI_BOLD};
    color: ${theme.COLORS.BLACK};
  `};
`

export const SettingsContainer = styled.View`
  margin-top: 24px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.COLORS.SLATE_300};
  background-color: ${({ theme }) => theme.COLORS.WHITE};
`

export const SettingsItemContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.COLORS.SLATE_300};
  padding: 8px 12px;
`

export const SettingsTitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD};
    font-family: ${theme.FONT_FAMILY.SEMI_BOLD};
    color: ${theme.COLORS.BLACK};
  `};
`
