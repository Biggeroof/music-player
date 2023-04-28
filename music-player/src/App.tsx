import { useState } from "react";
import "./css/App.css";
import List from "./components/List";
import SideBar from "./components/Sidebar";
import Song from "./components/Song";
import Playbar from "./components/Playbar";
import Hero from "./components/Hero";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="bg-home">
      <Nav />
      {/* <Hero /> */}
      <SideBar />
      <Playbar />
    </div>
  );
}

export default App;
