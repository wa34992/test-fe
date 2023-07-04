import {
  configureStore,
  combineReducers,
  getDefaultMiddleware
} from '@reduxjs/toolkit'

import productSlice from '../Pages/Product/redux/reducer'
import createSagaMiddleware from "redux-saga";
import loginSlice from '../Pages/Login/redux/reducer';
import { rootSaga } from './rootSaga';


const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    productSlice: productSlice,
    loginSlice: loginSlice
  },
  middleware: [...getDefaultMiddleware({ thunk: false }), sagaMiddleware]

})

sagaMiddleware.run(rootSaga)
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch