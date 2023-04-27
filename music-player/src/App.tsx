import { useState } from "react";
import "./App.css";
import List from "./components/List";

function App() {
<<<<<<< HEAD
  let items = ["playlist 1", "playlist 2"];
  // const [isPlaying, setIsPlaying] = useState(False)
  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  return (
    <div>
      <List
        items={items}
        heading="Playlists"
        onSelectItem={handleSelectItem}
        classNames="flex"
      />
    </div>
  );
=======
    useState(0);
    return (
        <>

        </>
    );
>>>>>>> 0b5152e96e1862b540b63ac654f7485e75c4138b
}

export default App;
