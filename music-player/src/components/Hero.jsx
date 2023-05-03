import { useState } from "react";
import Home from "../pages/Home";
import PlaylistTab from "../pages/PlaylistTab";
import "../css/hero.css";
import Playbar from "./Playbar"
import { importAllo } from '../utils'
let playlist = importAllo();

const Hero = () => {
  console.log(playlist)
  const [isHome, setIsHome] = useState(false);
  const [currIndex, setCurrIndex] = useState(0);

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
      {isHome && <Home />}
      {!isHome && <PlaylistTab playlist={playlist[currIndex]} />}
    </>
  );
};

export default Hero;
