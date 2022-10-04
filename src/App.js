import React from 'react'
import { Switch,Route,Link } from 'react-router-dom';
import {Layout, Typography, Space} from 'antd';

import {Navbar} from './components';

const App = () => {
  return (
    <div className="App">
      <div className="Navbar">
        <Navbar />
      </div>
      <div className="Main">

      </div>
      <div className="Footer">
        
      </div>
    </div>
  )
}

export default App