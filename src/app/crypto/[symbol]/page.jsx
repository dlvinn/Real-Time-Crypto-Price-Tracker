'use client'
import KrakenWebSocket from '@/lib/krakenWebSocket';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '@/lib/hooks';
import React, { useEffect } from 'react';


const CurrencyPrice = ({
    params:{
        symbol
    }
}) => {

    const dispatch = useDispatch();
  const message = useAppSelector((store) => store.websocket.messages);

  useEffect(() => {
    KrakenWebSocket(dispatch,symbol.replace("to", "/"));
   
  }, [dispatch]);
  return (
    <div>

<ul>
{message.map((messageObj, index) => (
<li key={index}>
{Array.isArray(messageObj) ? (
<div>
<div>Pair: {messageObj[2]}</div>
{messageObj[1].c && <div>Last Trade Price: {messageObj[1].c[0]}</div>}
{messageObj[1].v && <div>Volume: {messageObj[1].v[0]}</div>}
{/* Add more fields as needed */}
</div>
) : (
<div>
{messageObj.connectionID && <div>Connection ID: {messageObj.connectionID}</div>}
{messageObj.event && <div>Event: {messageObj.event}</div>}
{messageObj.status && <div>Status: {messageObj.status}</div>}
{messageObj.version && <div>Version: {messageObj.version}</div>}
{messageObj.pair && <div>pair: {messageObj.pair}</div>}
</div>
)}
</li>
))}
</ul>
    </div>
  )
}
export default CurrencyPrice