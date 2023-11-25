import { MainBottomTabScreenProps } from '@/navigation/types';
import { setToken } from '@/store/user/slices/auth-slice';
import React from 'react';
import { View } from 'react-native';
import { Button, Text } from 'react-native-paper';
import { useDispatch } from 'react-redux';

const HomeScreen: React.FC<MainBottomTabScreenProps<'Home'>> = () => {
  const dispatch = useDispatch();

  return (
    <View>
      <Text>Home Screen</Text>
      <Button onPress={() => dispatch(setToken(undefined))}>Sign Out</Button>
    </View>
  );
};

export default HomeScreen;
