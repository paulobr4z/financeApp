import * as React from 'react'
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack'
import { Categories } from '../screens/Categories'
import { TabRoutes } from './tab.routes'

type StackRoutes = {
  tabRoutes: undefined
  categories: undefined
}

export type StackNavigatorRoutesProps = NativeStackNavigationProp<StackRoutes>

const { Navigator, Screen } = createNativeStackNavigator<StackRoutes>()

export function StackRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="tabRoutes" component={TabRoutes} />
      <Screen name="categories" component={Categories} />
    </Navigator>
  )
}
