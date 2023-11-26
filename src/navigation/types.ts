import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type AppStackParamsList = {
  Register: undefined;
  Login: undefined;
  Main: undefined;
  EditProfile: undefined;
};

export type AppStackScreenProps<T extends keyof AppStackParamsList> =
  NativeStackScreenProps<AppStackParamsList, T>;

export type BottomTabsParamsList = {
  Home: undefined;
  Profile: undefined;
  Notification: undefined;
};

export type MainBottomTabScreenProps<
  T extends keyof BottomTabsParamsList | keyof AppStackParamsList,
> = BottomTabScreenProps<BottomTabsParamsList & AppStackParamsList, T>;

export type AppRouteList =
  | keyof AppStackParamsList
  | keyof BottomTabsParamsList;
