import { MainBottomTabScreenProps } from '@/navigation/types';
import React from 'react';
import { Text } from 'react-native-paper';

const NotificationScreen: React.FC<
  MainBottomTabScreenProps<'Notification'>
> = () => {
  return <Text>Notification Screen</Text>;
};

export default NotificationScreen;
