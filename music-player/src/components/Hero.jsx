import { useState } from "react";
import Home from "../pages/Home";
import PlaylistTab from "../pages/PlaylistTab";
import "../css/hero.css";
import importAll from '../importAll'

const Hero = ({ currPlaylist: Playlist }) => {
  const [isHome, setIsHome] = useState(false);

  return(
    <>
      <button
        type="button"
        className="backbtn btn"
        onClick={() => {
          setIsHome(!isHome);
        }}
      >
        <span
          className="glyphicon glyphicon-arrow-left text-light"
          aria-hidden="true"
        ></span>
      </button>
      {/* <PlaylistTab currPlaylist={currPlaylist} /> */}
      {/* {isHome && <Home />}
      {!isHome && <PlaylistTab />} */}
    </>
  );
};

export default Hero;
