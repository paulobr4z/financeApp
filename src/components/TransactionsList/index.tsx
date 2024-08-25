import { FlatList, Text } from 'react-native'
import * as S from './styles'
import { useEffect, useState } from 'react'
import { Transaction } from '../Transaction'
import { CaretDown } from 'phosphor-react-native'

interface ITransaction {
  id: string
  title: string
  type: 'income' | 'outcome'
}

export function TransactionsList() {
  const [transactionsData] = useState<ITransaction[]>([
    {
      id: '001',
      title: 'Freela',
      type: 'income',
    },
    {
      id: '002',
      title: 'Cinema',
      type: 'outcome',
    },
    {
      id: '003',
      title: 'Cinema',
      type: 'outcome',
    },
    {
      id: '004',
      title: 'Cinema',
      type: 'outcome',
    },
    {
      id: '005',
      title: 'Cinema',
      type: 'outcome',
    },
    {
      id: '006',
      title: 'Cinema',
      type: 'outcome',
    },
    {
      id: '007',
      title: 'Cinema',
      type: 'outcome',
    },
    {
      id: '008',
      title: 'Cinema',
      type: 'outcome',
    },
    {
      id: '009',
      title: 'Cinema',
      type: 'outcome',
    },
    {
      id: '010',
      title: 'Cinema',
      type: 'outcome',
    },
  ])

  useEffect(() => {}, [])

  return (
    <S.Container>
      <S.TransactionsListTitleContainer>
        <S.TransactionsListTitle>Agosto</S.TransactionsListTitle>
        <CaretDown weight="bold" size={20} style={{ marginTop: 2 }} />
      </S.TransactionsListTitleContainer>
      <FlatList
        data={transactionsData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Transaction type={item.type} title={item.title} />
        )}
        contentContainerStyle={{ gap: 6, paddingBottom: 240 }}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text>Que tal cadastrar a primeira turma?</Text>
        )}
      />
    </S.Container>
  )
}
