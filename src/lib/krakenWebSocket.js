import { w3cwebsocket as WebSocket } from 'websocket';
import { addMessage, addErrors, clearErrors, addConnectionStatus, clearConnectionStatus } from '@/lib/features/currency/webSocketSlice';

const KrakenWebSocket = (dispatch, pair) => {
  let ws;

  // Define a function to handle incoming messages
  const handleMessage = (message) => {
    const parsedMessage = JSON.parse(message.data);
    
    console.log('Received message from Kraken:', message.data);
    dispatch(addMessage(parsedMessage));

    // Parse and process the message as needed
  };

  // Establish WebSocket connection
  ws = new WebSocket('wss://ws.kraken.com');

  // Attach the message handler when the WebSocket connection is open
  dispatch(addConnectionStatus('opening'));

  ws.onopen = () => {
    console.log('Connected to Kraken WebSocket');
    dispatch(addConnectionStatus('opened'));

    // Subscribe to desired channels for real-time updates
    ws.send(JSON.stringify({
      event: 'subscribe',
      pair: [pair],
      subscription: {
        name: 'ticker'
      }
    }));

    // Attach the message handler
    ws.onmessage = handleMessage;
  };

  // Handle WebSocket close event
  ws.onclose = () => {
    console.log('WebSocket connection to Kraken closed');
    dispatch(addConnectionStatus('closed'));

  };

  // Handle WebSocket error event
  ws.onerror = (error) => {
    console.error('WebSocket error:', error);
    dispatch(addErrors(error));

  };

  // Cleanup function to close the WebSocket connection when the component unmounts
  return () => {
    if (ws) {
      ws.close();
    }
  };
};

export default KrakenWebSocket;
