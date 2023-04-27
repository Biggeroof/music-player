import { useState } from "react";
import "./css/App.css";
import List from "./components/List";
import SideBar from "./components/Sidebar";
import Song from "./components/Song";
import Playbar from "./components/Playbar";
import Hero from "./components/Hero";

function App() {
  let items = ["playlist 1", "playlist 2"];
  // const [isPlaying, setIsPlaying] = useState(False)
  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <Hero />
      <SideBar />
      <List
        items={items}
        heading="Playlists"
        onSelectItem={handleSelectItem}
        classNames="flex"
      />
      <Playbar />
    </div>
  );
}

export default App;
