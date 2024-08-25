import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Home } from '../screens/Home'
import { House } from 'phosphor-react-native'
import { useTheme } from 'styled-components/native'

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
          tabBarIcon: ({ color }) => <House color={color} weight="bold" />,
        }}
      />
    </Navigator>
  )
}
