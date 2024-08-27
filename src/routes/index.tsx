import { View } from 'react-native'
import { useTheme } from 'styled-components/native'
import { NavigationContainer } from '@react-navigation/native'

import { AppRoutes } from './app.routes'
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

export function Routes() {
  const { COLORS } = useTheme()

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.SLATE_200 }}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <BottomSheetModalProvider>
          <NavigationContainer>
            <AppRoutes />
          </NavigationContainer>
        </BottomSheetModalProvider>
      </GestureHandlerRootView>
    </View>
  )
}
