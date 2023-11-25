import { MainBottomTabScreenProps } from '@/navigation/types';
import React from 'react';
import { Text } from 'react-native-paper';

const ProfileScreen: React.FC<MainBottomTabScreenProps<'Profile'>> = () => {
  return <Text>Profile Screen</Text>;
};

export default ProfileScreen;
