import { useState } from "react";
import Home from "../pages/Home";
import PlaylistTab from "../pages/PlaylistTab";

const Hero = ( {currPlaylist: Playlist }) => {
  const [isHome, setIsHome] = useState(false);

  return (
    <>
      <PlaylistTab currPlaylist={currPlaylist}/>
      {/* {isHome && <Home />}
      {!isHome && <PlaylistTab />} */}
    </>
  );
};

export default Hero;
