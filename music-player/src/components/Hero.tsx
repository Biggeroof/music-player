import { useState } from "react";
import Home from "../pages/Home";
import PlaylistTab from "../pages/PlaylistTab";
import "../css/hero.css";

const Hero = () => {
  const [isHome, setIsHome] = useState(true);

  return (
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
      {!isHome && <PlaylistTab />}
    </>
  );
};

export default Hero;
