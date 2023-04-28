import { useRef, useEffect, useState } from "react"; 
// import useSound from 'use-sound';
import Playlist from "./Playlist";
// import '../css/playbar.css';
import song from '../images/Legends Never Die (ft. Against The Current) [OFFICIAL AUDIO] _ Worlds 2017 - League of Legends.mp3'

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
const Player = ( {isPaused, repeatOn, volume, audioRef, progressBarRef} ) => {

    const [timeProgress, setTimeProgress] = useState(0);
    const [duration, setDuration] = useState(0);
    
    const formatTime = (time) => {
        if (time && !isNaN(time)) {
          const minutes = Math.floor(time / 60);
          const formatMinutes =
            minutes < 10 ? `0${minutes}` : `${minutes}`;
          const seconds = Math.floor(time % 60);
          const formatSeconds =
            seconds < 10 ? `0${seconds}` : `${seconds}`;
          return `${formatMinutes}:${formatSeconds}`;
        }
        return '00:00';
      };

    const onLoadedMetadata = () => {
        const seconds = audioRef.current.duration;
        setDuration(seconds);
        progressBarRef.current.max = seconds;
      };

    const handleProgressChange = () => {
        audioRef.current.currentTime = progressBarRef.current.value;
    };



    // const [currSong, setCurrSong] = useState(currPlaylist[0]);

    // function declareSong() {
    //     const [play, { pause, duration, sound}] = useSound(song, volume);
    // }

    // idk how to this fix... "currSong is any"
    let prevVolume = volume;


    // pause and play
    useEffect(() => {
        if (isPaused) {
          audioRef.current.pause();
        } else {
          audioRef.current.play();
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
                <p>
                    {currTime.min}:{currTime.sec}
                </p>
                <p>
                    {time.min}:{time.sec}
                </p>
            </div> */}
            {/* className="hidden"  */}
            <audio src={song} 
            ref={audioRef} 
            onLoadedMetadata={onLoadedMetadata}/>


            <div className="progress putBotdiv">
                <span className="time current">{formatTime(timeProgress)}</span>
                <input type="range" 
                    ref={progressBarRef}
                    defaultValue="0"
                    onChange={handleProgressChange}
                />
                <span className="time">{formatTime(duration)}</span>
                    {/* <span className="time current">00:00</span> */}
                   
                    {/* <span className="time">99:99</span> */}
            </div>
                {/* <input
                type="range"
                min="0"
                max={duration / 1000}
                // default="0"
                value={seconds}
                className="timeline"
                onChange={(e) => {
                    sound.seek([e.target.value]);
                }}
            /> */}
        </div>
    );
}

export default Player