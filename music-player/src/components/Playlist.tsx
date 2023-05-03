import Song from "./Song";

interface Props {
  playlist: [typeof Song];
  title: string;
}

const Playlist = (props: Props) => {
  return <div>Playlist</div>;
};

export default Playlist;
