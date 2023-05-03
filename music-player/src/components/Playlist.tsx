<<<<<<< HEAD
import Song from "./Song";
=======
import Song from './currSong';
>>>>>>> 99749aa65dfbb8dde7f9318ec1a071d45dbf3002

interface Props {
  playlist: [typeof Song];
  title: string;
}

const Playlist = (props: Props) => {
  return <div>Playlist</div>;
};

export default Playlist;
