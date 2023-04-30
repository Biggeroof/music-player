import { useState } from "react";
import Home from "../pages/Home";
import PlaylistTab from "../pages/PlaylistTab";
// import importAll from "../importAll";

const Hero = ( {currPlaylist: Playlist }) => {


  return(
    <>
      <PlaylistTab currPlaylist={currPlaylist}/>
      {/* {isHome && <Home />}
      {!isHome && <PlaylistTab />} */}
    </>
  );
};

export default Hero;
