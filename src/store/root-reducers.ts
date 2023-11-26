import themeReducer from './color-schema/slices';
import { COLOR_SCHEMA_SLICE, USER_AUTH_SLICE } from './constants';
import authReducer from './auth/slices';
import { persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

const rootReducer = {
  [COLOR_SCHEMA_SLICE]: persistReducer(
    {
      key: 'schema',
      storage: AsyncStorage,
    },
    themeReducer,
  ),
  [USER_AUTH_SLICE]: authReducer,
};

export default rootReducer;
