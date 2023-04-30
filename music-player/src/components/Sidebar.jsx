import React from "react";
import "../css/sidebar.css";
import List from "./List";
import notify from "../images/notify.png";
import importAll from "../importAll";


const SideBar = () => {

  //  this is wrong LOL
  const playlists = importAll(require.context('./playlist', false, /\.json$/));
  console.log(playlists);



  // let items = ["Oh my God", "Banana", "Watermelon", "Apple"];

  
  // const [isPlaying, setIsPlaying] = useState(False)
  const handleSelectItem = (item) => {
    console.log(item);
  };

  return (
    <div className="d-flex flex-column flex-shrink-0 p-3 text-white bg sideBar">
      <img src={notify} alt="notify logo" style={{ width: 30, height: 30 }} />
      <a
        href="/"
        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
      >
        <svg className="bi me-2" width="40" height="32"></svg>
        <span className="fs-1">Notify</span>
        <br></br>
      </a>
      <List
        items={() => {}}
        heading="Playlists"
        onSelectItem={handleSelectItem}
        classNames="flex"
      />
    </div>
  );
};

export default SideBar;
