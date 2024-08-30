import styled from 'styled-components/native'

interface IContainer {
  isActive: boolean
}

export const Container = styled.TouchableOpacity<IContainer>`
  width: 52px;
  height: 31px;
  background-color: ${({ theme }) => theme.COLORS.GREEN_600};
  border-radius: 99px;
  padding: 0 2px;
  justify-content: center;
  align-items: ${({ isActive }) => (!isActive ? 'flex-start' : 'flex-end')};
`

export const Indicator = styled.View`
  width: 27px;
  height: 27px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  border-radius: 99px;
`
