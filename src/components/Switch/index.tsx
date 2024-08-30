import * as S from './styles'

interface ISwitch {
  isActive?: boolean
  toggleSwitch: () => void
}

export function Switch({ isActive = true, toggleSwitch }: ISwitch) {
  return (
    <S.Container activeOpacity={1} onPress={toggleSwitch} isActive={isActive}>
      <S.Indicator />
    </S.Container>
  )
}
