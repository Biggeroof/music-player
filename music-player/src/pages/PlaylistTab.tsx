import { useState } from 'react';
import Playlist from '../components/Playlist';
// import Song from '../components/Song';


const PlaylistTab = ( { currPlaylist:  Playlist }) => {

  // fill with a local testing playlist
  // let playlist = [{},
  //                 {},
  //                 {}
  // ]

  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
    <div className="flex-column d-flex">
      <div className="text-light banner"> 
        <h1>{currPlaylist.heading}</h1>

      Banner 
      </div>
      <div className="playlists" >

      </div>
    </div>

    </>
  );
}


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



export default PlaylistTab