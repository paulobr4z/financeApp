import { useState } from 'react'
import { Switch } from '../../components/Switch'
import * as S from './styles'

export function Settings() {
  const [isActive, setActive] = useState(false)

  const toggleSwitch = () => setActive((previousState) => !previousState)

  return (
    <S.Container>
      <S.Title>Configurações</S.Title>
      <Switch toggleSwitch={toggleSwitch} isActive={isActive} />
    </S.Container>
  )
}
