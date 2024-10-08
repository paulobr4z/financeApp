import styled from 'styled-components/native'
import Animated from 'react-native-reanimated'

export const Container = styled(Animated.View)`
  position: relative;
  width: 45px;
  height: 27px;
  border-radius: 99px;
  padding: 0 2px;
  justify-content: center;
`

export const Indicator = styled(Animated.View)`
  position: absolute;
  width: 23px;
  height: 23px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  border-radius: 99px;
`
