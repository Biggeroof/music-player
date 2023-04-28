
interface Props {
  length: number;
  title: string;
  singers: string[];
  location: number;  // from 0 to 1?
  volume: number; // from 0 to 1
  image: string; // some other url too
}

const Song = ( props: Props ) => {
  return (
    <div>Song</div>
  )
}

export default Song