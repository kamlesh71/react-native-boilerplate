import createSagaMiddleware from 'redux-saga';
import { configureStore } from '@reduxjs/toolkit';
import rootReducers from './root-reducers';
import rootSaga from './root-sagas';
import persistStore from 'redux-persist/es/persistStore';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

export const store = configureStore({
  reducer: rootReducers,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(middlewares),
});

sagaMiddleware.run(rootSaga);

export type AppState = ReturnType<typeof store.getState>;

export const persistor = persistStore(store);
