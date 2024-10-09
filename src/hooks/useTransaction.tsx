import { createContext, ReactNode, useContext, useState } from 'react'
import { formatDateTime } from '../utils'

interface TransactionProps {
  name: string
  type: 'income' | 'outcome' | string
  category: string
  amount: string
  updated_at: string
}

interface TransactionProviderProps {
  children: ReactNode
}

interface TransactionContextData {
  transaction: TransactionProps
  addTransaction: (transaction: TransactionProps) => void
}

const TransactionContext = createContext<TransactionContextData>(
  {} as TransactionContextData,
)

export function TransactionProvider({
  children,
}: TransactionProviderProps): JSX.Element {
  const [transaction, setTransaction] = useState<TransactionProps>({
    name: '',
    type: 'income',
    category: '',
    amount: '',
    updated_at: formatDateTime(),
  })

  const addTransaction = (transaction: TransactionProps) => {
    setTransaction(transaction)
  }

  return (
    <TransactionContext.Provider value={{ transaction, addTransaction }}>
      {children}
    </TransactionContext.Provider>
  )
}

export function useTransaction(): TransactionContextData {
  const context = useContext(TransactionContext)

  if (!context) {
    throw new Error('useTransaction must be used within a TransactionProvider')
  }

  return context
}
