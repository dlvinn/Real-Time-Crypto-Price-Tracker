// redux/cryptoSlice.js
import { createSlice } from '@reduxjs/toolkit';

const cryptoSlice = createSlice({
  name: 'crypto',
  initialState: {
    currentPrices: {},
    websocketStatus: 'disconnected',
    error: null,
  },
  reducers: {
    connectWebSocket: (state) => {
      // Implement WebSocket connection logic
    },
    closeWebSocket: (state) => {
      // Implement WebSocket close logic
    },
    subscribeToPriceUpdates: (state, action) => {
      // Implement WebSocket subscription logic for price updates
    },
    updatePrice: (state, action) => {
      // Update the current price in the state
      state.currentPrices[action.payload.symbol] = action.payload.price;
    },
    setWebSocketStatus: (state, action) => {
      state.websocketStatus = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { connectWebSocket, closeWebSocket, subscribeToPriceUpdates, updatePrice, setWebSocketStatus, setError } = cryptoSlice.actions;

export default cryptoSlice.reducer;
