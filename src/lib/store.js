import { configureStore } from '@reduxjs/toolkit'
import websocketReducer from '../lib/features/currency/webSocketSlice';

export const makeStore = () => {
  return configureStore({
    reducer: {
      websocket: websocketReducer,
    }
  })
}