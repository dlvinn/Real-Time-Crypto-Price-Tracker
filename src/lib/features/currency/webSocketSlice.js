// websocketSlice.js

import { createSlice } from '@reduxjs/toolkit';

const websocketSlice = createSlice({
  name: 'websocket',
  initialState: {
    messages: [],
    errors:[],
    connectionStatus:null
  },
  reducers: {
    addMessage(state, action) {
      state.messages.push(action.payload);
    },
    clearMessages(state) {
      state.messages = [];
    },
    addErrors(state, action) {
      state.errors.push(action.payload);
    },
    clearErrors(state) {
      state.errors = [];
    },
    addConnectionStatus(state, action) {
      state.connectionStatus = action.payload;
    },
    clearConnectionStatus(state) {
      state.connectionStatus = '';
    },
   
  },
});

// Selector function to get the latest trade price
export const selectLatestTradePrice = (arr) => {
  if (Array.isArray(arr) && arr.length > 0) {
    // Return the last item of the array
    return arr[arr.length - 1];
  } else {
    // Return null if the input is not an array or empty
    return null;
  }
};


export const { addMessage, clearMessages, addErrors, clearErrors, addConnectionStatus, clearConnectionStatus } = websocketSlice.actions;
export default websocketSlice.reducer;
