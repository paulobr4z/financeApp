import * as S from './styles'
import {
  Easing,
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated'
import { TouchableOpacity } from 'react-native'
import { useTheme } from 'styled-components/native'

interface ISwitch {
  isActive?: boolean
  toggleSwitch: () => void
}

export function Switch({ isActive = true, toggleSwitch }: ISwitch) {
  const { COLORS } = useTheme()
  const offset = useSharedValue(2)

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: offset.value }],
    }
  })

  const colorChangingElementStyle = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      offset.value,
      [2, 22],
      [COLORS.SLATE_400, COLORS.GREEN_600],
    )

    return {
      backgroundColor,
    }
  })

  const handlePress = () => {
    if (isActive) {
      offset.value = withTiming(2, {
        duration: 300,
        easing: Easing.inOut(Easing.ease),
      })
    } else {
      offset.value = withTiming(22, {
        duration: 300,
        easing: Easing.inOut(Easing.ease),
      })
    }
    toggleSwitch()
  }

  return (
    <TouchableOpacity activeOpacity={1} onPress={handlePress}>
      <S.Container style={[colorChangingElementStyle]}>
        <S.Indicator style={[animatedStyle]} />
      </S.Container>
    </TouchableOpacity>
  )
}
