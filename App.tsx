/* eslint-disable camelcase */
import { StatusBar } from 'react-native'
import { ThemeProvider } from 'styled-components/native'
import { SQLiteProvider } from 'expo-sqlite'
import {
  useFonts,
  Poppins_400Regular,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins'

import { defaultTheme } from './src/theme'

import { Routes } from './src/routes'
import { Loading } from './src/components/Loading'
import { initializeDatabase } from './src/database/initializeDatabase'
import { TransactionProvider } from './src/hooks/useTransaction'

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_600SemiBold,
    Poppins_700Bold,
  })

  return (
    <ThemeProvider theme={defaultTheme}>
      <SQLiteProvider databaseName="myDatabase.db" onInit={initializeDatabase}>
        <TransactionProvider>
          <StatusBar
            barStyle="dark-content"
            backgroundColor="transparent"
            translucent
          />
          {fontsLoaded ? <Routes /> : <Loading />}
        </TransactionProvider>
      </SQLiteProvider>
    </ThemeProvider>
  )
}
