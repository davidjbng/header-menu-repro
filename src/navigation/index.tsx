import { HeaderButton, Text } from '@react-navigation/elements'
import { createStaticNavigation, StaticParamList } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Home } from './screens/Home'
import { NotFound } from './screens/NotFound'
import { Profile } from './screens/Profile'
import { Settings } from './screens/Settings'

const RootStack = createNativeStackNavigator({
  screens: {
    HomeTabs: {
      screen: Home,
      options: ({ navigation }) => ({
        title: 'Home',
        unstable_headerRightItems: () => [
          {
            type: 'menu',
            label: 'Menu',
            icon: { type: 'sfSymbol', name: 'ellipsis' },
            changesSelectionAsPrimaryAction: false,
            menu: {
              title: 'Menu',
              multiselectable: false,
              items: [
                {
                  type: 'action',
                  label: 'Settings',
                  onPress: () => navigation.navigate('Settings'),
                },
                {
                  type: 'action',
                  label: 'Profile',
                  onPress: () => navigation.navigate('Profile', { user: 'johndoe' }),
                },
              ],
            },
          },
        ],
      }),
    },
    Profile: {
      screen: Profile,
      linking: {
        path: ':user(@[a-zA-Z0-9-_]+)',
        parse: {
          user: (value) => value.replace(/^@/, ''),
        },
        stringify: {
          user: (value) => `@${value}`,
        },
      },
    },
    Settings: {
      screen: Settings,
      options: ({ navigation }) => ({
        presentation: 'modal',
        headerRight: () => (
          <HeaderButton onPress={navigation.goBack}>
            <Text>Close</Text>
          </HeaderButton>
        ),
      }),
    },
    NotFound: {
      screen: NotFound,
      options: {
        title: '404',
      },
      linking: {
        path: '*',
      },
    },
  },
})

export const Navigation = createStaticNavigation(RootStack)

type RootStackParamList = StaticParamList<typeof RootStack>

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
