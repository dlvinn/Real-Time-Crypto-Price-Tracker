'use client'
import KrakenWebSocket from '@/lib/krakenWebSocket';
import { useDispatch } from 'react-redux';
import { selectLatestTradePrice } from '@/lib/features/currency/webSocketSlice';
import { useAppSelector } from '@/lib/hooks';
import React, { useEffect } from 'react';
import { cryptoPairs } from '@/lib/cryptoPairs';

const CurrencyPrice = ({
    params:{
        symbol
    }
}) => {

    const dispatch = useDispatch();
    const message = useAppSelector((store) => store.websocket.messages);
    const errorMessage = useAppSelector((store) => store.websocket.errors);
    const connectionStatus = useAppSelector((store) => store.websocket.connectionStatus);
    const tickerMessages = Array.isArray(message) && message.filter((message) => message[2] === 'ticker');

    
    useEffect(() => {
      KrakenWebSocket(dispatch,symbol.replace("to", "/"));
      
      const latestTradePrice = selectLatestTradePrice(tickerMessages);
    console.log('latest price'+latestTradePrice);
  }, [dispatch]);

  function formatNumber(number) {
    return Number(number).toLocaleString('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
}

  return <div>
    
  {connectionStatus === 'opening' ?
  <div class="flex justify-center items-center h-screen">
  <div class="animate-spin rounded-full h-32 w-32 border-t-2 border-b-4 border-purple-300">
  
  </div>
  <div className='block absolute mt-48 pt-4'>
  Connecting to the websocket...
  </div>
</div>
:

<div className='dark:bg-gray-900 bg-yellow-400 flex justify-center items-center p-14 h-screen text-3xl text-yellow-100'>
  <ul className='dark:bg-gray-800 rounded-xl shadow-2xl shadow-yellow-400'>
{tickerMessages.length > 0 && (
<li className='p-2'>
  {/* Render details of the last ticker message */}
  
  <p className='p-5'><span className='font-bold'>Pair: </span>{cryptoPairs[symbol]}</p>
  {tickerMessages[tickerMessages.length - 1][1]?.c && (
    <div className='p-5'> <span className='font-bold'>Last Trade Price:</span> {formatNumber(tickerMessages[tickerMessages.length - 1][1].c[0])} US Dollar</div>
  )}
  {tickerMessages[tickerMessages.length - 1][1]?.v && (
    <div className='p-5'><span className='font-bold'>Volume: </span>{formatNumber(tickerMessages[tickerMessages.length - 1][1].v[0])} {symbol.substring(0, 3)}</div>
  )}
  {/* Add more fields as needed */}
</li>
)}
</ul>





</div>
}



</div>

}




export default CurrencyPrice