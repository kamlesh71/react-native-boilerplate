import { MainBottomTabScreenProps } from '@/navigation/types';
import React, { useEffect, useMemo } from 'react';
import { Button, Text } from 'react-native-paper';

const ProfileScreen: React.FC<MainBottomTabScreenProps<'Profile'>> = ({
  navigation,
}) => {
  const headerRight = useMemo(() => {
    return () => (
      <Button onPress={() => navigation.navigate('EditProfile')}>
        Edit Profile
      </Button>
    );
  }, [navigation]);

  useEffect(() => {
    navigation.setOptions({
      headerRight,
    });
  }, [navigation, headerRight]);

  return <Text>Profile Screen</Text>;
};

export default ProfileScreen;
