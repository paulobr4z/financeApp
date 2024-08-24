import { TouchableOpacity } from 'react-native'
import { Avatar } from '../../components/Avatar'
import * as S from './styles'
import { Bell } from 'phosphor-react-native'
import { Spacer } from '../../components/Spacer'
import { Balance } from '../../components/balance'

export function Home() {
  return (
    <S.Container>
      <S.Header>
        <Avatar />
        <S.UserName>Oi, Paulo!</S.UserName>
        <Spacer />
        <TouchableOpacity>
          <Bell weight="bold" />
        </TouchableOpacity>
      </S.Header>
      <Balance />
    </S.Container>
  )
}
