import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SettingsScreen, {
  SettingsScreenProps,
} from '../../screens/stack/settingsScreen/SettingsScreen';

type StackNavigatorScreens = {
  Settings: SettingsScreenProps;
};

export default function StackNavigator() {
  const Stack = createNativeStackNavigator<StackNavigatorScreens>();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={'Settings'}>
      <Stack.Screen name={'Settings'} component={SettingsScreen} />
    </Stack.Navigator>
  );
}
