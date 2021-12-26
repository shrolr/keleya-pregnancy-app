/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AuthStack} from './src/navigation/authStackNavigator/AuthStack';
import {Provider} from 'react-redux';
import configureStore from '~redux/store/configureStore';
import i18n from './src/i18n';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const initI18n = i18n;

const App = () => {
  return (
    <Provider store={configureStore.store}>
      <NavigationContainer>
        <AuthStack />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
