import 'regenerator-runtime/runtime'
import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import thunkMiddleware from 'redux-thunk'
import privacySlice from './privacy'
import storage from '@react-native-async-storage/async-storage'
import rootSaga from '@/store/saga'
import createSagaMiddleware from 'redux-saga'
const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({
  [privacySlice.name]: privacySlice.reducer,
})

const persistConfig = {
  key: 'impeto',
  whitelist: ['privacy'], // make sure it does not clash with server keys
  storage,
}

export const store = configureStore({
  reducer: persistReducer(persistConfig, rootReducer),
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunkMiddleware, sagaMiddleware],
})

export type RootState = ReturnType<typeof rootReducer>

export const persistor = persistStore(store)
sagaMiddleware.run(rootSaga) // Inicializar o saga
