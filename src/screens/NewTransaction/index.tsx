import * as S from './styles'
import { Input } from '../../components/Input'
import { useCallback, useRef, useState } from 'react'
import { CaretRight } from 'phosphor-react-native'
import { useFocusEffect } from '@react-navigation/native'
import { TextInput } from 'react-native'

export function NewTransaction() {
  const [transactiontype, setTransactionType] = useState('')

  const inputRef = useRef<TextInput>(null)

  useFocusEffect(
    useCallback(() => {
      inputRef.current?.focus()
    }, []),
  )

  return (
    <S.Container>
      <S.Header>
        <S.NewTransactionTitle>
          Qual é o valor do lançamento?
        </S.NewTransactionTitle>
        <Input ref={inputRef} placeholder="R$ 0,00" keyboardType="numeric" />
      </S.Header>

      <S.TypeContainer>
        <S.TransactionTypeTitle>
          Qual é o valor do lançamento?
        </S.TransactionTypeTitle>
        <S.ButtonTypeContainer>
          <S.TransactionTypeButton
            type="income"
            onPress={() => setTransactionType('income')}
            selected={transactiontype === 'income'}
          >
            <S.TransactionTypeText selected={transactiontype === 'income'}>
              Entrada
            </S.TransactionTypeText>
          </S.TransactionTypeButton>
          <S.TransactionTypeButton
            type="outcome"
            onPress={() => setTransactionType('outcome')}
            selected={transactiontype === 'outcome'}
          >
            <S.TransactionTypeText selected={transactiontype === 'outcome'}>
              Saída
            </S.TransactionTypeText>
          </S.TransactionTypeButton>
        </S.ButtonTypeContainer>
      </S.TypeContainer>

      <S.CategoryContainer>
        <S.NewTransactionTitle>Categoria</S.NewTransactionTitle>
        <S.CategoryButton>
          <S.CategoryText>Lazer</S.CategoryText>
          <CaretRight weight="bold" size={18} />
        </S.CategoryButton>
      </S.CategoryContainer>
    </S.Container>
  )
}
