import React,{ useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

import Sidebar from './components/sidebar/Sidebar';

function App() {
  

  return (
    <div className="App">
      <div className="AppGlass">
        <Sidebar/>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default App
