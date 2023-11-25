import React from 'react';
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import { BottomTabsParamsList } from './types';

import HomeScreen from '@/screens/Home/HomeScreen';
import ProfileScreen from '@/screens/Profile/ProfileScreen';
import NotificationScreen from '@/screens/Notification/NotificationScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator<BottomTabsParamsList>();

const createOptions = (icon: string): BottomTabNavigationOptions => {
  return {
    tabBarIcon: ({ color, size }) => (
      <MaterialCommunityIcons name={icon} color={color} size={size} />
    ),
  };
};

export const BottomTabs = () => (
  <Tab.Navigator>
    <Tab.Screen
      name="Home"
      component={HomeScreen}
      options={createOptions('home')}
    />
    <Tab.Screen
      name="Notification"
      component={NotificationScreen}
      options={createOptions('bell')}
    />
    <Tab.Screen
      name="Profile"
      component={ProfileScreen}
      options={createOptions('account')}
    />
  </Tab.Navigator>
);
