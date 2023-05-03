import Song from "./currSong";

interface Props {
  playlist: [typeof Song];
  title: string;
}

const Playlist = (props: Props) => {
  return <div>Playlist</div>;
};

export default Playlist;
