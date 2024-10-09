import { CaretRight } from 'phosphor-react-native'
import * as S from './styles'
import { useNavigation } from '@react-navigation/native'
import { TabNavigatorRoutesProps } from '../../routes/tab.routes'
import { TouchableOpacityProps } from 'react-native'
import { useTransaction } from '../../hooks/useTransaction'

interface ICategory extends TouchableOpacityProps {
  title: string
  colorCircle: string
}

export function Category({ title, colorCircle }: ICategory) {
  const navigation = useNavigation<TabNavigatorRoutesProps>()
  const { addTransaction, transaction } = useTransaction()

  async function storeData(category: string) {
    try {
      const transactionData = { ...transaction }
      transactionData.category = category
      addTransaction(transactionData)
      navigation.navigate('newTransaction')
    } catch (e) {
      console.error('Erro ao salvar dado:', e)
    }
  }

  return (
    <S.Container onPress={() => storeData(title)}>
      <S.Row>
        <S.Circle colorCircle={colorCircle} />
        <S.Title>{title}</S.Title>
      </S.Row>
      <CaretRight weight="bold" size={18} />
    </S.Container>
  )
}
