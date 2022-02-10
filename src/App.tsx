import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { registerRootComponent } from 'expo';
import Icon from 'react-native-vector-icons/FontAwesome';

import { Home, Settings } from './views';
import { useTheme } from './hooks';

const Tab = createBottomTabNavigator();

function App(): React.ReactElement {
  const { colors, isDark } = useTheme();

  const navigationTheme = {
    dark: isDark,
    colors: {
      primary: colors.primary,
      background: colors.background.primary,
      card: colors.card.primary,
      text: colors.text.primary,
      border: colors.border.primary,
      notification: colors.notification.primary,
    },
  };

  return (
    <NavigationContainer theme={navigationTheme}>
      <Tab.Navigator initialRouteName="Home" screenOptions={getScreenOptions}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Settings" component={Settings} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

function getScreenOptions({ route }): {
  tabBarIcon: (p: { color: string; size: number }) => React.ReactElement;
  headerShown: boolean;
} {
  return {
    tabBarIcon: ({ color, size }): React.ReactElement => {
      let iconName;

      if (route.name === 'Home') {
        iconName = 'home';
      } else if (route.name === 'Settings') {
        iconName = 'cog';
      }

      return <Icon name={iconName} size={size} color={color} />;
    },
    headerShown: false,
  };
}

registerRootComponent(App);
