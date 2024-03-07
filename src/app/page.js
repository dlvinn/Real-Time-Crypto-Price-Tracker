'use client'

import React from 'react';

import Link from 'next/link'
const cryptoPairs = [
  'XBTtoUSD', // Bitcoin to US Dollar
  'ETHtoUSD', // Ethereum to US Dollar
  'XRPtoUSD', // Ripple to US Dollar
  'LTCtoUSD', // Litecoin to US Dollar
  // Add more pairs as needed
];

export default function Home() {
  

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h1>WebSocket Messages</h1>
    {cryptoPairs.map((cryptoPair)=>{
      return <Link className="underline hover:text-black/70 dark:bg-white dark:text-purple-700  dark:hover:text-purple-500" href={`/crypto/${cryptoPair}`}>
                {cryptoPair}
      </Link>
    })}
        
       
         </div>
    </main>
  );
}

