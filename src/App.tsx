import { enableFreeze } from 'react-native-screens';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { RootStack, navigationRef } from '@/navigation/AppStack';
import { DarkTheme, LightTheme } from './theme';
import { PaperProvider } from 'react-native-paper';
import { Provider, useSelector } from 'react-redux';
import './utils/bootstrap';
import store from './store';
import { selectActiveColorSchema } from './store/color-schema/selectors';
import { useListenColorSchemaChange } from './hooks/useListenColorSchemaChange';

enableFreeze(true);

function App(): JSX.Element {
  useListenColorSchemaChange();

  const colorSchema = useSelector(selectActiveColorSchema);

  const appTheme = colorSchema === 'dark' ? DarkTheme : LightTheme;

  return (
    <PaperProvider theme={appTheme}>
      <NavigationContainer ref={navigationRef} theme={appTheme}>
        <RootStack />
      </NavigationContainer>
    </PaperProvider>
  );
}

const AppWithRedux = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default AppWithRedux;
