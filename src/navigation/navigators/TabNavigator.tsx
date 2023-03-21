import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen, {
  HomeScreenProps,
} from '../../screens/tab/homeScreen/HomeScreen';

type TabNavigatorScreens = {
  Home: HomeScreenProps;
};

export default function TabNavigator() {
  const Tab = createBottomTabNavigator<TabNavigatorScreens>();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={'Home'}>
      <Tab.Screen name={'Home'} component={HomeScreen} />
    </Tab.Navigator>
  );
}
