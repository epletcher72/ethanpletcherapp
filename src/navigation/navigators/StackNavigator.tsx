import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SettingsScreen from '../../screens/stack/settingsScreen/SettingsScreen';
import TabNavigator from './TabNavigator';

type StackNavigatorScreens = {
  TabNavigator: EmptyProps;
  Settings: EmptyProps;
};

export default function StackNavigator() {
  const Stack = createNativeStackNavigator<StackNavigatorScreens>();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={'TabNavigator'}>
      <Stack.Screen name={'TabNavigator'} component={TabNavigator} />
      <Stack.Screen name={'Settings'} component={SettingsScreen} />
    </Stack.Navigator>
  );
}
