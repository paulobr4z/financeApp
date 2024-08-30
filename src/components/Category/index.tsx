import { CaretRight } from 'phosphor-react-native'
import * as S from './styles'
import { useNavigation } from '@react-navigation/native'
import { TabNavigatorRoutesProps } from '../../routes/tab.routes'

interface ICategory {
  title: string
  colorCircle: string
}

export function Category({ title, colorCircle }: ICategory) {
  const { navigate } = useNavigation<TabNavigatorRoutesProps>()

  return (
    <S.Container onPress={() => navigate('newTransaction')}>
      <S.Row>
        <S.Circle colorCircle={colorCircle} />
        <S.Title>{title}</S.Title>
      </S.Row>
      <CaretRight weight="bold" size={18} />
    </S.Container>
  )
}
