import React from "react";
import {Chat, SideBar} from "../components"

function Home() {
  return (
    <div className="home">
      <div className="container">
      <SideBar />
      <Chat />
      </div>
    </div>
  );
}

export default Home;
