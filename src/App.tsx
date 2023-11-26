import { enableFreeze } from 'react-native-screens';
import { NavigationContainer, Theme } from '@react-navigation/native';
import React from 'react';
import { RootStack, navigationRef } from '@/navigation/AppStack';
import { DarkTheme, LightTheme } from './theme';
import { PaperProvider } from 'react-native-paper';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider, useSelector } from 'react-redux';
import './utils/bootstrap';
import { store, persistor } from './store';
import { selectActiveColorSchema } from './store/color-schema/selectors';
import { useListenColorSchemaChange } from './hooks/useListenColorSchemaChange';

enableFreeze(true);

function App(): JSX.Element {
  useListenColorSchemaChange();

  const colorSchema = useSelector(selectActiveColorSchema);

  const appTheme = colorSchema === 'dark' ? DarkTheme : LightTheme;

  return (
    <PaperProvider theme={appTheme}>
      <NavigationContainer
        ref={navigationRef}
        theme={appTheme as unknown as Theme}>
        <RootStack />
      </NavigationContainer>
    </PaperProvider>
  );
}

const AppWithRedux = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);

export default AppWithRedux;
