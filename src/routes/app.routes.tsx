import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Home } from '../screens/Home'
import { GearSix, House, PlusCircle } from 'phosphor-react-native'
import { useTheme } from 'styled-components/native'
import { NewTransaction } from '../screens/NewTransaction'
import { Settings } from '../screens/Settings'

const { Navigator, Screen } = createBottomTabNavigator()

export function AppRoutes() {
  const { COLORS } = useTheme()

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: COLORS.BLACK,
        tabBarInactiveTintColor: COLORS.SLATE_500,
        tabBarLabelStyle: { display: 'none' },
      }}
    >
      <Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <House color={color} weight="bold" size={28} />
          ),
        }}
      />
      <Screen
        name="New Transaction"
        component={NewTransaction}
        options={{
          tabBarIcon: ({ color }) => (
            <PlusCircle color={color} weight="bold" size={28} />
          ),
        }}
      />
      <Screen
        name="Settings"
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
