import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '@/screens/Auth/Login/LoginScreen';
import { AppStackParamsList } from './types';
import RegisterScreen from '@/screens/Auth/Register/RegisterScreen';
import { useSelector } from 'react-redux';
import { selectLoggedIn } from '@/store/user/selectors/auth-selector';
import { BottomTabs } from './BottomTabs';
import { createNavigationContainerRef } from '@react-navigation/native';

export const navigationRef = createNavigationContainerRef();

const Stack = createNativeStackNavigator<AppStackParamsList>();

export const RootStack = () => {
  const isLoggedIn = useSelector(selectLoggedIn);

  return (
    <Stack.Navigator>
      {!isLoggedIn ? (
        <>
          <Stack.Screen
            options={{
              title: 'Sign In',
              animationTypeForReplace: !isLoggedIn ? 'pop' : 'push',
            }}
            name="Login"
            component={LoginScreen}
          />
          <Stack.Screen
            options={{ title: 'Sign Up' }}
            name="Register"
            component={RegisterScreen}
          />
        </>
      ) : (
        <Stack.Screen
          options={{ headerShown: false }}
          name="Main"
          component={BottomTabs}
        />
      )}
    </Stack.Navigator>
  );
};
