import { useState } from "react";
import Playlist from "../components/Playlist";
import Playbar from "../components/Playbar";
import importAll from "../importAll";

const PlaylistTab = () => {
  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  // fill with a local testing playlist
  console.log(importAll());
  const playlist = importAll();
  // const playlist = {
  //   title: "Playlist 1",
  //   songs: [
  //     {
  //       title: "Legends Never Die (ft. Against The Current)",
  //       src: "../images/Legends Never Die (ft. Against The Current) [OFFICIAL AUDIO] _ Worlds 2017 - League of Legends.mp3",
  //       artist: "League of Legends",
  //     },
  //     {
  //       title: "Flamingo",
  //       src: "../images/Kero Kero Bonito - Flamingo [mega earrape and bass boost]_zmEUpMF-HLE.mp3",
  //       artist: "Kero Kero Binito",
  //     },
  //   ],
  // };

  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [currSong, setCurrSong] = useState(playlist.songs[0]);

  return (
    <>
      <div className="flex-column d-flex">
        <div className="text-light banner">
          <h1>{playlist.title}</h1>
          <h3>Made By: Edmond</h3>
          {/* <img src={playlist.thumbnail} /> */}
        </div>
        <div className="playlists">
          {playlist.songs.length === 0 && <p></p>}
          <ul className="list-group">
            {playlist.songs.map((item, index) => (
              <li
                className={
                  selectedIndex === index
                    ? "list-group-item active"
                    : "list-group-item bg-dark"
                }
                key={item.title}
                onClick={() => {
                  setSelectedIndex(index);
                  setCurrSong(playlist.songs[index]);
                  handleSelectItem(item.title);
                }}
              >
                <p className="text-light">{item.title}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Playbar />
    </>
  );
};

//   <h1>{props.heading}</h1>
//   {/* this returns the p header if both are true and nothing if left if false */}
//   {props.items.length === 0 && <p></p>}
//   <ul className="list-group">
//     {props.items.map((item, index) => (
//       <li
//         className={
//           selectedIndex === index
//             ? "list-group-item active"
//             : "list-group-item bg-dark"
//         }
//         key={item}
//         onClick={() => {
//           setSelectedIndex(index);
//           props.onSelectItem(item);
//         }}
//       >
//         <p className="text-light">{item}</p>
//       </li>
//     ))}
//   </ul>
// </div>

export default PlaylistTab;
