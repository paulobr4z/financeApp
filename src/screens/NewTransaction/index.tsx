import * as S from './styles'
import { Input } from '../../components/Input'
import { useCallback, useState } from 'react'
import { CaretRight } from 'phosphor-react-native'
import { useNavigation, useFocusEffect } from '@react-navigation/native'
import { StackNavigatorRoutesProps } from '../../routes/stack.routes'
import { useTransactionstDatabase } from '../../database/useTransactionsDatabase'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { formatCurrency, formatDateTime } from '../../utils'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useTransaction } from '../../hooks/useTransaction'

interface TransactionProps {
  name: string
  type: 'income' | 'outcome' | string
  category: string
  amount: string
  updated_at: string
}

export function NewTransaction() {
  const [selectedCategory, setSelectedCategory] = useState('')
  const { addTransaction, transaction } = useTransaction()
  const [transactionData, setTransactionData] = useState<TransactionProps>({
    name: '',
    type: '',
    category: selectedCategory,
    amount: '',
    updated_at: formatDateTime(),
  })

  console.log('aqui:', transaction)

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
      // const response = await transactionsDatabase.create()

      // Alert.alert('Produto cadastrado com o ID: ' + response.insertedRowId)

      console.log(transaction)
      const updatedTransaction = { ...transactionData }
      updatedTransaction.category = transaction.category
      addTransaction(updatedTransaction)
    } catch (error) {
      console.log(error)
    }
  }

  const updateTransactionType = (newType: 'income' | 'outcome') => {
    setTransactionData((prevState) => ({
      ...prevState,
      type: newType,
    }))
  }

  async function getCategorySelected() {
    try {
      const storedCategory = await AsyncStorage.getItem('category')
      if (storedCategory) {
        setSelectedCategory(storedCategory)
      }
    } catch (e) {
      console.error('Erro ao buscar o nome no AsyncStorage:', e)
    }
  }

  useFocusEffect(
    useCallback(() => {
      getCategorySelected()
    }, []),
  )

  return (
    <S.Container>
      <S.Header>
        <S.NewTransactionTitle>
          Qual é o nome do lançamento?
        </S.NewTransactionTitle>
        <Input
          placeholder="Título"
          onChangeText={(value) =>
            setTransactionData((prev) => ({ ...prev, name: value }))
          }
          value={transactionData?.name}
        />
      </S.Header>

      <S.NewTransactionContainer>
        <S.NewTransactionTitle>
          Qual é o valor do lançamento?
        </S.NewTransactionTitle>
        <Input
          hasMask
          placeholder="R$ 0,00"
          keyboardType="numeric"
          onChangeText={(value) =>
            setTransactionData((prev) => ({
              ...prev,
              amount: formatCurrency(value),
            }))
          }
          value={transactionData?.amount}
        />
      </S.NewTransactionContainer>

      <S.TypeContainer>
        <S.TransactionTypeTitle>
          Qual o tipo do lançamento?
        </S.TransactionTypeTitle>
        <S.ButtonTypeContainer>
          <S.TransactionTypeButton
            type="income"
            onPress={() => updateTransactionType('income')}
            selected={transactionData?.type === 'income'}
          >
            <S.TransactionTypeText
              selected={transactionData?.type === 'income'}
            >
              Entrada
            </S.TransactionTypeText>
          </S.TransactionTypeButton>
          <S.TransactionTypeButton
            type="outcome"
            onPress={() => updateTransactionType('outcome')}
            selected={transactionData?.type === 'outcome'}
          >
            <S.TransactionTypeText
              selected={transactionData?.type === 'outcome'}
            >
              Saída
            </S.TransactionTypeText>
          </S.TransactionTypeButton>
        </S.ButtonTypeContainer>
      </S.TypeContainer>

      <S.CategoryContainer>
        <S.NewTransactionTitle>Categoria</S.NewTransactionTitle>
        <S.CategoryButton onPress={() => navigate('categories')}>
          <S.CategoryText>{selectedCategory || 'Selecionar'}</S.CategoryText>
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

      <TouchableOpacity
        style={styles.button}
        onPress={() => console.log(selectedCategory)}
      >
        <Text style={styles.text}>Selected Category</Text>
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
