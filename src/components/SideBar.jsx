import React from 'react'
import {Chat, Navbar, Search} from '../components';

const SideBar = () => {
  return (
    <div className="sidebar">
      <Navbar />
      <Search/>
      
    </div>
  );
}

export default SideBar
