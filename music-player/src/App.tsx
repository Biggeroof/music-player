import { useState } from "react";
import "./App.css";
import List from "./components/List";
import Playbar from "./components/Playbar";

function App() {
  let items = ["playlist 1", "playlist 2"];
  // const [isPlaying, setIsPlaying] = useState(False)
  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  return (
    <div>
      {/* <List
        items={items}
        heading="Playlists"
        onSelectItem={handleSelectItem}
        classNames="flex"
      /> */}
      {/* <Playbar /> */}
      <Playbar />
    </div>
  );
}

export default App;
