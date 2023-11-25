import themeReducer from './color-schema/slices/color-schema-slice';
import { COLOR_SCHEMA_SLICE, USER_AUTH_SLICE } from './constants';
import authReducer from './user/slices/auth-slice';

const rootReducer = {
  [COLOR_SCHEMA_SLICE]: themeReducer,
  [USER_AUTH_SLICE]: authReducer,
};

export default rootReducer;
