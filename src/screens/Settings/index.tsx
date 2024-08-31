import { useState } from 'react'
import { Switch } from '../../components/Switch'
import * as S from './styles'
import { Avatar } from '../../components/Avatar'
import { CaretRight } from 'phosphor-react-native'

export function Settings() {
  const [isActive, setActive] = useState(false)

  const toggleSwitch = () => setActive((previousState) => !previousState)

  return (
    <S.Container>
      <S.AvatarContainer>
        <Avatar
          width="54px"
          height="54px"
          urlImage="https://github.com/paulobr4z.png"
        />
        <S.Username>Olá, Paulo</S.Username>
      </S.AvatarContainer>
      <S.SettingsContainer>
        <S.SettingsItemContainer>
          <S.SettingsTitle>Editar perfil</S.SettingsTitle>
          <CaretRight />
        </S.SettingsItemContainer>
        <S.SettingsItemContainer>
          <S.SettingsTitle>Minhas categorias</S.SettingsTitle>
          <CaretRight />
        </S.SettingsItemContainer>
      </S.SettingsContainer>
      <S.SettingsContainer>
        <S.SettingsItemContainer>
          <S.SettingsTitle>Modo escuro</S.SettingsTitle>
          <Switch toggleSwitch={toggleSwitch} isActive={isActive} />
        </S.SettingsItemContainer>
        <S.SettingsItemContainer>
          <S.SettingsTitle>Minhas categorias</S.SettingsTitle>
          <Switch toggleSwitch={toggleSwitch} isActive={isActive} />
        </S.SettingsItemContainer>
      </S.SettingsContainer>
    </S.Container>
  )
}
