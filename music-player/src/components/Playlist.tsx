import Song from './currSong';

interface Props {
    playlist: [typeof Song];
}

const Playlist = ( props: Props) => {
  return (
    <div>Playlist</div>
  )
}

export default Playlist