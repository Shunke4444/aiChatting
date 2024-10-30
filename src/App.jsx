import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';
import Header from './component/header'

const App = () => {
  return (
  <main className='flex flex-col h-screen bg-gray'>
    <Header/>
  </main>
  )
};

export default App;