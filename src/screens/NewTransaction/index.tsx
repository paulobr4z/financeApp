import * as S from './styles'
import { Input } from '../../components/Input'
import { useState } from 'react'
import { CaretRight } from 'phosphor-react-native'
import { useNavigation } from '@react-navigation/native'
import { StackNavigatorRoutesProps } from '../../routes/stack.routes'
import { useTransactionstDatabase } from '../../database/useTransactionsDatabase'
import { Alert, StyleSheet, Text, TouchableOpacity } from 'react-native'

export function NewTransaction() {
  const [transactiontype, setTransactionType] = useState('')

  const { navigate } = useNavigation<StackNavigatorRoutesProps>()

  const transactionsDatabase = useTransactionstDatabase()

  async function list() {
    try {
      const response = await transactionsDatabase.getAll()
      console.log(response)
    } catch (error) {
      console.log(error)
    }
  }

  async function create() {
    try {
      const response = await transactionsDatabase.create()

      Alert.alert('Produto cadastrado com o ID: ' + response.insertedRowId)
    } catch (error) {
      console.log(error)
    }
  }

  function formatDateTime() {
    const now = new Date()

    const year = now.getFullYear()
    const month = String(now.getMonth() + 1).padStart(2, '0') // Mês começa de 0
    const day = String(now.getDate()).padStart(2, '0')

    const hours = String(now.getHours()).padStart(2, '0')
    const minutes = String(now.getMinutes()).padStart(2, '0')
    const seconds = String(now.getSeconds()).padStart(2, '0')

    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`
  }

  // console.log(dateNow) // Exemplo de saída: "2024-08-31 15:45:48"

  return (
    <S.Container>
      <S.Header>
        <S.NewTransactionTitle>
          Qual é o valor do lançamento?
        </S.NewTransactionTitle>
        <Input hasMask placeholder="R$ 0,00" keyboardType="numeric" />
      </S.Header>

      <S.TypeContainer>
        <S.TransactionTypeTitle>
          Qual o tipo do lançamento?
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
        <S.CategoryButton onPress={() => navigate('categories')}>
          <S.CategoryText>Selecionar</S.CategoryText>
          <CaretRight weight="bold" size={18} />
        </S.CategoryButton>
      </S.CategoryContainer>

      <TouchableOpacity style={styles.button} onPress={list}>
        <Text style={styles.text}>Get all</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={create}>
        <Text style={styles.text}>Create transaction</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={formatDateTime}>
        <Text style={styles.text}>Formated data</Text>
      </TouchableOpacity>
    </S.Container>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  button: {
    paddingHorizontal: 32,
    paddingVertical: 8,
    backgroundColor: '#242424',
    borderRadius: 8,
  },
  text: {
    color: '#fff',
  },
})
