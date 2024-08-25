import { View } from 'react-native'
import * as S from './styles'
import { ArrowUp, ArrowDown } from 'phosphor-react-native'
import { Spacer } from '../Spacer'

export function Balance() {
  return (
    <S.Container>
      <S.Row>
        <S.BalanceTitle>Saldo</S.BalanceTitle>
        <Spacer />
        <S.BalanceTitle>R$ 1.200,00</S.BalanceTitle>
      </S.Row>
      <S.Row>
        <S.TransactionButton type="income">
          <ArrowUp weight="bold" size={18} color="#fff" />
        </S.TransactionButton>
        <View>
          <S.TransactionTypeTitle>Receitas</S.TransactionTypeTitle>
          <S.TransactionTypeContent>R$ 1.200,00</S.TransactionTypeContent>
        </View>
        <Spacer />
        <S.TransactionButton type="outcome">
          <ArrowDown weight="bold" size={18} color="#fff" />
        </S.TransactionButton>
        <View>
          <S.TransactionTypeTitle>Despesas</S.TransactionTypeTitle>
          <S.TransactionTypeContent>R$ 1.800,00</S.TransactionTypeContent>
        </View>
      </S.Row>
    </S.Container>
  )
}
