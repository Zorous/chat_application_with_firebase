import React from 'react'
import {Chat, Chats, Navbar, Search} from '../components';

const SideBar = () => {
  return (
    <div className="sidebar">
      <Navbar />
      <Search/>
      <Chats/>
    </div>
  );
}

export default SideBar
