import Song from './Song';

interface Props {
    playlist: [typeof Song];
}

const Playlist = ( props: Props) => {
  return (
    <div>Playlist</div>
  )
}

export default Playlist