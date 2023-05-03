import { useState } from "react";
import Home from "../pages/Home";
import PlaylistTab from "../pages/PlaylistTab";
import "../css/hero.css";
import Playbar from "./Playbar"
// import importAll from '../importAll'

const Hero = () => {
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
<<<<<<< HEAD
      {/* <PlaylistTab currPlaylist={currPlaylist} /> */}
      {/* {isHome && <Home />}
      {!isHome && <PlaylistTab />} */}
=======
      {isHome && <Home />}
      {!isHome && <PlaylistTab />}
>>>>>>> 99749aa65dfbb8dde7f9318ec1a071d45dbf3002
    </>
  );
};

export default Hero;
