import { useState } from "react";
import Home from "../pages/Home";
import PlaylistTab from "../pages/PlaylistTab";

const Hero = () => {
  const [isHome, setIsHome] = useState(true);

  return (
    <>
      {isHome && <Home />}
      {!isHome && <PlaylistTab />}
    </>
   
  );
};

export default Hero;
