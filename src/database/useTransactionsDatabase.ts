/* eslint-disable no-useless-catch */
import { useSQLiteContext } from 'expo-sqlite'

export type ProductDatabase = {
  id: number
  name: string
  type: string
  category: string
  amount: number
  created_at: Date
}

export function useTransactionstDatabase() {
  const database = useSQLiteContext()

  async function getAll() {
    try {
      const query = 'SELECT * FROM transactions'

      const response = await database.getFirstAsync(query)

      console.log(response)

      return response
    } catch (error) {
      throw error
    }
  }

  async function create() {
    const statement = await database.prepareAsync(
      'INSERT INTO transactions (name, type, category, amount, updated_at) VALUES ($name, $type, $category, $amount, $updated_at)',
    )

    try {
      const result = await statement.executeAsync({
        $name: 'Jantar',
        $type: 'saida',
        $category: 'alimentação',
        $amount: 80000,
        $updated_at: '2024-09-01 14:28:09',
      })

      const insertedRowId = result.lastInsertRowId.toLocaleString()

      return { insertedRowId }
    } catch (error) {
      throw error
    } finally {
      await statement.finalizeAsync()
    }
  }

  async function deleteTable() {
    try {
      const query = 'SELECT * FROM transactions'

      const response = await database.getFirstAsync(query)

      console.log(response)

      return response
    } catch (error) {
      throw error
    }
  }

  return { getAll, create, deleteTable }
}
