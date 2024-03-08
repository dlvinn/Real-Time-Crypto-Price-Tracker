'use client'

import React, {useState} from 'react';
import { useAppSelector } from '@/lib/hooks';
import Link from 'next/link'
import { cryptoPairs } from '@/lib/cryptoPairs';

export default function Home() {
  
  const connectionStatus = useAppSelector((store) => store.websocket.connectionStatus);
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  
  // Function to toggle the dropdown state
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  
  // Function to handle input change
  const handleInputChange = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

   // Filtered cryptoPairs based on search term
   const filteredCryptoPairs = Object.entries(cryptoPairs).filter(([pair, description]) =>
   description.toLowerCase().includes(searchTerm.toLowerCase())
 );


  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 dark:bg-gray-700 bg-purple-200 ">
  <div className=" flex items-center justify-center ">
      <div className="relative group">
        <button
          id="dropdown-button"
          className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500 bg-yellow-400 "
          onClick={toggleDropdown}
          
        >
          <input
            id="search-input"
            className="block w-full px-4 py-2 text-gray-800 border rounded-md border-gray-300 focus:outline-none"
            type="text"
            placeholder="Search currencies"
            autoComplete="off"
            value={searchTerm}
            onChange={handleInputChange}
          />          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 ml-2 mt-2 -mr-1" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fillRule="evenodd" d="M6.293 9.293a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
        <div id="dropdown-menu" className={`absolute right-0 mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 p-1 space-y-1 ${isOpen ? '' : 'hidden'} overflow-y-scroll h-80 bg-yellow-300`}>
          
          {/* Dropdown content goes here */}
          {filteredCryptoPairs.map(([pair, description]) => (
           <Link href={`/crypto/${pair}`} key={pair} className="block px-4 py-2 text-gray-700 hover:bg-gray-100 active:bg-blue-100 cursor-pointer rounded-md font-medium">{description}</Link>
    
  ))}
         
        </div>
      </div>
    </div>
  
  <div className='grid md:grid-cols-4 sm:flex sm:flex-column gap-3'>
  <span className="col-span-4 m-auto p-5 text-lg">WebSocket Messages</span>
  {Object.entries(cryptoPairs).map(([pair, description]) => (
    <div key={pair} className="">
      <Link
        className=" bg-yellow-400 text-gray-800 font-bold rounded border-b-2 border-green-500 hover:border-green-600 hover:bg-green-500 hover:text-white shadow-md py-2 px-6 inline-flex items-center w-full"
        href={`/crypto/${pair}`}
      >
        <span className="mr-2 flex-grow">{description}</span>
      </Link>
    </div>
  ))}
</div>
</main>

  );
}

