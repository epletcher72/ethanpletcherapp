import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import WelcomeScreen, {
  WelcomeScreenProps,
} from '../../screens/authStack/welcomeScreen/WelcomeScreen';

type AuthStackNavigatorScreens = {
  Welcome: WelcomeScreenProps;
};

export default function AuthStackNavigator() {
  const AuthStack = createNativeStackNavigator<AuthStackNavigatorScreens>();

  return (
    <AuthStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={'Welcome'}>
      <AuthStack.Screen name={'Welcome'} component={WelcomeScreen} />
    </AuthStack.Navigator>
  );
}
