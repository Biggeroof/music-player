import { useState } from "react";
import "./App.css";
import List from "./components/List";
<<<<<<< HEAD
import Playbar from "./components/Playbar";
=======
import SideBar from "./components/Sidebar";
import Song from "./components/Song";
import Playbar from "./components/Playbar";
import Hero from "./components/Hero";
>>>>>>> 6605c3ccaea10953dad894819c5faf71b1795001

function App() {
  let items = ["playlist 1", "playlist 2"];
  // const [isPlaying, setIsPlaying] = useState(False)
  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
<<<<<<< HEAD
      {/* <List
        items={items}
        heading="Playlists"
        onSelectItem={handleSelectItem}
        classNames="flex"
      /> */}
      {/* <Playbar /> */}
      <Playbar />
=======
        <Hero />
        <SideBar />
        <List
            items={items}
            heading="Playlists"
            onSelectItem={handleSelectItem}
            classNames="flex"
        />
        <Playbar />
>>>>>>> 6605c3ccaea10953dad894819c5faf71b1795001
    </div>
  );
}

export default App;
