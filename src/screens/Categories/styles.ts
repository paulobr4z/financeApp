import { SafeAreaView } from 'react-native-safe-area-context'
import styled, { css } from 'styled-components/native'

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.SLATE_200};
  padding: 32px 24px 24px 24px;
`

export const CategoriesTitleContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 12px;
`

export const CategoriesTitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.LG};
    font-family: ${theme.FONT_FAMILY.SEMI_BOLD};
    color: ${theme.COLORS.BLACK};
    line-height: ${theme.LINE_HEIGHT.XL};
  `};
`

export const Row = styled.View`
  flex-direction: row;
  gap: 12px;
`

export const SelectCategoryContainer = styled.View`
  flex-direction: row;
  margin-top: 12px;
  padding: 0 4px;
`

export const SelectCategoryTitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.BLACK};
  `};
`
