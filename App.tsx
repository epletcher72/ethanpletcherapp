import React from 'react';
import {useColorScheme, View} from 'react-native';
import {darkGreyBackground, white} from './src/assets/colors';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import useRedux from './src/redux/useRedux';

export default function App(): JSX.Element {
  const {store, persistor} = useRedux();
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? darkGreyBackground : white,
    flex: 1,
  };

  return (
    <Provider store={store}>
      <PersistGate loading={<></>} persistor={persistor}>
        <View style={backgroundStyle}></View>
      </PersistGate>
    </Provider>
  );
}
