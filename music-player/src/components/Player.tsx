import { useRef, useEffect, useState } from "react";
// import useSound from 'use-sound';
import Playlist from "./Playlist";
import Song from "./Song";
// import '../css/playbar.css';
// import Song from "./Song";
import song from "../images/Legends Never Die (ft. Against The Current) [OFFICIAL AUDIO] _ Worlds 2017 - League of Legends.mp3";
const ABSOLUTE_PATH = "/src/images/";

// interface Props {
//     // currPlaylist: typeof Playlist;
//     isPaused: boolean;
//     // setIsPaused: () => void;
//     repeatOn: boolean;
//     // setIsRepeat: () => void;
//     volume: number;
//     audioRef: object;
//     // pos: number;
//     // shuffle: boolean;
//     // setVolume: () => void;
// }

// include current song :)
const Player = ({
  currSong,
  isPaused,
  repeatOn,
  volume,
  audioRef,
  progressBarRef,
}) => {
  const [timeProgress, setTimeProgress] = useState(0);
  const [duration, setDuration] = useState(0);

  const formatTime = (time: number) => {
    if (time && !isNaN(time)) {
      const minutes = Math.floor(time / 60);
      const formatMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
      const seconds = Math.floor(time % 60);
      const formatSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
      return `${formatMinutes}:${formatSeconds}`;
    }
    return "00:00";
  };

  const onLoadedMetadata = () => {
    const seconds = audioRef.current.duration;
    setDuration(seconds);
    progressBarRef.current.max = seconds;
  };

  const handleProgressChange = () => {
    audioRef.current.currentTime = progressBarRef.current.value;
  };

  // Keeps track of the current time of the song (min:sec)
  const [currTime, setCurrTime] = useState({ min: 0, sec: 0 });

  // same curr time in secs
  const [seconds, setSeconds] = useState();

  // pause and play
  let time = { min: 0, sec: 0 };
  //
  useEffect(() => {
    if (isPaused) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
      const sec = duration / 1000;
      const min = Math.floor(sec / 60);
      const secRemain = Math.floor(sec % 60);
      const time = {
        min: min,
        sec: secRemain,
      };
    }
  }, [isPaused, audioRef]);

  useEffect(() => {
    if (audioRef) {
      audioRef.current.volume = volume;
    }
  }, [volume, audioRef]);

  return (
    <div>
      {/* <div className="time">
            <div className="time">
                <p>
                    {currTime.min}:{currTime.sec}
                </p>
                <p>
                    {time.min}:{time.sec}
                </p>
            </div> */}
      {/* className="hidden"  */}
      <audio
        src={ABSOLUTE_PATH + currSong.src}
        ref={audioRef}
        onLoadedMetadata={onLoadedMetadata}
      />

      <div className="progress putBotdiv">
        <span className="time current">{formatTime(timeProgress)}</span>
        <input
          type="range"
          ref={progressBarRef}
          defaultValue="0"
          onChange={handleProgressChange}
        />
        <span className="time">{formatTime(duration)}</span>
        {/* <span className="time current">00:00</span> */}

        {/* <span className="time">99:99</span> */}
      </div>
      {/* <input
                <input
                type="range"
                min="0"
                max={duration / 1000}
                onChange={(e) => {
                    sound.seek([e.target.value]);
                }}
            /> */}
    </div>
  );
};

export default Player;
