import {NavigationContainer} from '@react-navigation/native';
import RNBootSplash from 'react-native-bootsplash';
import StackNavigator from './navigators/StackNavigator';

export default function Navigation() {
  return (
    <NavigationContainer
      onReady={() => RNBootSplash.hide({fade: true, duration: 500})}>
      <StackNavigator />
    </NavigationContainer>
  );
}
