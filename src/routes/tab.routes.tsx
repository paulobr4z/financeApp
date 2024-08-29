import {
  BottomTabNavigationProp,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs'
import { useTheme } from 'styled-components/native'
import { GearSix, House, PlusCircle } from 'phosphor-react-native'

import { Home } from '../screens/Home'
import { NewTransaction } from '../screens/NewTransaction'
import { Settings } from '../screens/Settings'

type TabRoutes = {
  home: undefined
  newTransaction: undefined
  settings: undefined
}

export type TabNavigatorRoutesProps = BottomTabNavigationProp<TabRoutes>

const { Navigator, Screen } = createBottomTabNavigator<TabRoutes>()

export function TabRoutes() {
  const { COLORS } = useTheme()

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: COLORS.BLACK,
        tabBarInactiveTintColor: COLORS.SLATE_500,
        tabBarLabelStyle: { display: 'none' },
        tabBarHideOnKeyboard: true,
      }}
    >
      <Screen
        name="home"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <House color={color} weight="bold" size={28} />
          ),
        }}
      />
      <Screen
        name="newTransaction"
        component={NewTransaction}
        options={{
          tabBarIcon: ({ color }) => (
            <PlusCircle color={color} weight="bold" size={28} />
          ),
        }}
      />
      <Screen
        name="settings"
        component={Settings}
        options={{
          tabBarIcon: ({ color }) => (
            <GearSix color={color} weight="bold" size={28} />
          ),
        }}
      />
    </Navigator>
  )
}
