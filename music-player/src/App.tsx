import { useState } from "react";
import "./css/App.css";
import List from "./components/List";
import SideBar from "./components/Sidebar";
import Song from "./components/Song";
import Playbar from "./components/Playbar";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import fetch from "node-fetch";

function App() {
  return (
    <>
      <div className="bg-home">
        <Nav />
      </div>
      <div className="bg-home flex d-flex justify-content-star">
        <SideBar />
        <Hero />
      </div>
      <div>
        <Playbar />
      </div>
    </>
  );
}

export default App;
